import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-calender',
  standalone: false,
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CalenderComponent {
  selected: Date | null = null;
}
