import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {
  @Input() name?: string;
}
