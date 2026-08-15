import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1Page } from './tab1.page';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the "Tab 1" title', () => {
    const title: HTMLElement = fixture.nativeElement.querySelector('ion-title');
    expect(title.textContent).toContain('Tab 1');
  });

  it('should pass its name to the explore container', () => {
    const exploreContainer: HTMLElement = fixture.nativeElement.querySelector('app-explore-container');
    expect(exploreContainer.getAttribute('name')).toBe('Tab 1 page');
  });
});
