import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple-crm';
}
