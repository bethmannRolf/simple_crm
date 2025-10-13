import { Component, inject, signal } from '@angular/core';
import { ToggleSidebarService } from '../toggle-sidebar.service';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  standalone: true,         
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [ RouterLink, RouterLinkActive]
})
export class SidebarComponent {
  private sidebarService = inject(ToggleSidebarService);

 
  sidebarOpen = signal(false);
user: any|string;
dashboard: any|string;

  constructor() {

    this.sidebarService.sidebarOpen$.subscribe(value => {
      this.sidebarOpen.set(value);
    });
  }


  
}
