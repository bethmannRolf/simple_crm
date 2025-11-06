import { Component, Input } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {

  @Input() value: number | null = null; 
}
