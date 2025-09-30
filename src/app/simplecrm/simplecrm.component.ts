import { Component } from '@angular/core';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-simplecrm',
  imports: [ToolbarComponent, SidebarComponent],
  templateUrl: './simplecrm.component.html',
  styleUrl: './simplecrm.component.scss'
})
export class SimplecrmComponent {




}
