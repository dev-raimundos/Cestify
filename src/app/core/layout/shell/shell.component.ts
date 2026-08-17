import { Component, computed, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
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
export class ShellComponent {
    private readonly _authService = inject(AuthService);
    private readonly _themeService = inject(ThemeService);

    currentUser = this._authService.currentUser;
    theme = this._themeService.theme;

    userDisplayName = computed(() => this._firstAndLastNameOf(this.currentUser()?.name));

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
