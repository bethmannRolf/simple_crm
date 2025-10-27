import { Component } from '@angular/core';
import { DialogAddUserComponent } from "../dialog-add-user/dialog-add-user.component";

@Component({
  selector: 'app-user-content',
  imports: [DialogAddUserComponent],
  templateUrl: './user-content.component.html',
  styleUrl: './user-content.component.scss'
})
export class UserContentComponent {


  showAddUserDialog = false;

  openAddUserDialog() {
    this.showAddUserDialog = true;
  }

  closeAddUserDialog() {
    this.showAddUserDialog = false;
  }



}
