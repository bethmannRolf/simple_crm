import { Component, inject, signal } from '@angular/core';
import { ToggleSidebarService } from '../toggle-sidebar.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: []
})
export class ToolbarComponent {
  sidebarService = inject(ToggleSidebarService);
  sidebarOpen = signal(false);

  constructor() {
    this.sidebarService.sidebarOpen$.subscribe(value => {
      this.sidebarOpen.set(value);
    });
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}