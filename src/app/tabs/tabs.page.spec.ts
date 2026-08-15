import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { TabsPage } from './tabs.page';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsPage],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a tab button for each tab', () => {
    const labels: HTMLElement[] = Array.from(fixture.nativeElement.querySelectorAll('ion-label'));
    expect(labels.map((label) => label.textContent)).toEqual(['Tab 1', 'Tab 2', 'Tab 3']);
  });

  it('should render the icon used by each tab button', () => {
    const icons: HTMLElement[] = Array.from(fixture.nativeElement.querySelectorAll('ion-icon'));
    expect(icons.map((icon) => icon.getAttribute('name'))).toEqual(['triangle', 'ellipse', 'square']);
  });
});
