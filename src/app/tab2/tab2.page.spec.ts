import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2Page } from './tab2.page';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the "Tab 2" title', () => {
    const title: HTMLElement = fixture.nativeElement.querySelector('ion-title');
    expect(title.textContent).toContain('Tab 2');
  });

  it('should pass its name to the explore container', () => {
    const exploreContainer: HTMLElement = fixture.nativeElement.querySelector('app-explore-container');
    expect(exploreContainer.getAttribute('name')).toBe('Tab 2 page');
  });
});
