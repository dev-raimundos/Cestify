import { Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { Keyboard } from '@capacitor/keyboard';
import type { PluginListenerHandle } from '@capacitor/core';
import { AuthService } from '@core/services/authentication/auth.service';
import { Theme, ThemeService } from '@core/services/theme/theme.service';

@Component({
    selector: 'app-shell',
    standalone: true,
    imports: [
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        MatMenuModule,
        RouterLink,
        RouterLinkActive,
        RouterOutlet
    ],
    templateUrl: './shell.component.html',
    styleUrl: './shell.component.scss',
})
export class ShellComponent implements OnInit, OnDestroy {
    private readonly _authService = inject(AuthService);
    private readonly _themeService = inject(ThemeService);
    private readonly _keyboardListeners: PluginListenerHandle[] = [];

    currentUser = this._authService.currentUser;
    theme = this._themeService.theme;

    userDisplayName = computed(() => this._firstAndLastNameOf(this.currentUser()?.name));

    /**
     * Compensa o quanto o Android encolhe a viewport quando o teclado aparece,
     * já que o dock é `position: fixed` e por padrão subiria junto com esse
     * encolhimento — o objetivo é ele ficar parado na posição real da tela.
     */
    private readonly _keyboardOffset = signal(0);
    dockTransform = computed(() => `translate(-50%, ${this._keyboardOffset()}px)`);

    async ngOnInit(): Promise<void> {
        if (!Capacitor.isNativePlatform()) {
            return;
        }

        this._keyboardListeners.push(
            await Keyboard.addListener('keyboardWillShow', (info) => this._keyboardOffset.set(info.keyboardHeight)),
            await Keyboard.addListener('keyboardWillHide', () => this._keyboardOffset.set(0)),
        );
    }

    ngOnDestroy(): void {
        this._keyboardListeners.forEach((listener) => listener.remove());
    }

    setTheme(theme: Theme) {
        this._themeService.setTheme(theme);
    }

    logout() {
        this._authService.logout();
    }

    menuItems = [
        { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
        { label: 'Usuários', icon: 'people', route: '/usuarios' },
        { label: 'Configurações', icon: 'settings', route: '/config' },
    ];

    private _firstAndLastNameOf(name: string | undefined): string {
        const parts = name?.trim().split(/\s+/).filter(Boolean) ?? [];
        return [parts[0], parts.length > 1 ? parts.at(-1) : undefined].filter(Boolean).join(' ');
    }
}
