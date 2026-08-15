import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3Page } from './tab3.page';

describe('Tab3Page', () => {
  let component: Tab3Page;
  let fixture: ComponentFixture<Tab3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the "Tab 3" title', () => {
    const title: HTMLElement = fixture.nativeElement.querySelector('ion-title');
    expect(title.textContent).toContain('Tab 3');
  });

  it('should pass its name to the explore container', () => {
    const exploreContainer: HTMLElement = fixture.nativeElement.querySelector('app-explore-container');
    expect(exploreContainer.getAttribute('name')).toBe('Tab 3 page');
  });
});
