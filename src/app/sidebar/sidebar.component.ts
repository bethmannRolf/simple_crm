import { Component, inject, signal } from '@angular/core';
import { ToggleSidebarService } from '../toggle-sidebar.service';
import { UserComponent } from "../user/user.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,         
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [UserComponent]
})
export class SidebarComponent {
  private sidebarService = inject(ToggleSidebarService);

 
  sidebarOpen = signal(false);

  constructor() {

    this.sidebarService.sidebarOpen$.subscribe(value => {
      this.sidebarOpen.set(value);
    });
  }
}
