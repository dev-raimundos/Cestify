import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreContainerComponent } from './explore-container.component';

describe('ExploreContainerComponent', () => {
  let component: ExploreContainerComponent;
  let fixture: ComponentFixture<ExploreContainerComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an empty name by default', () => {
    const strong: HTMLElement = fixture.nativeElement.querySelector('strong');
    expect(strong.textContent?.trim()).toBe('');
  });

  it('should render the given name', () => {
    fixture.componentRef.setInput('name', 'Tab 1 page');
    fixture.detectChanges();

    const strong: HTMLElement = fixture.nativeElement.querySelector('strong');
    expect(strong.textContent).toContain('Tab 1 page');
  });
});
