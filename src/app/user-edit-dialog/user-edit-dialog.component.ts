import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { User } from '../models/user.class';

@Component({
  selector: 'app-user-edit-dialog',
  standalone: true,
  imports: [CommonModule, DialogEditUserComponent],
  templateUrl: './user-edit-dialog.component.html',
  styleUrls: ['./user-edit-dialog.component.scss']
})
export class UserEditDialogComponent {

  @Input() user!: User;
  @Output() closeUserEditDialogEmitter = new EventEmitter<void>();
  @Output() saveUserEditEmitter = new EventEmitter<User>();

  showDialogEditUser = false;

  openEditUserDialog() {
    this.showDialogEditUser = true;

  }
  closeEditUserDialog() {
    this.showDialogEditUser = false;
    this.closeUserDropdown()
  }

  saveEditUser(updatedUser: User) {
    this.saveUserEditEmitter.emit(updatedUser);
    this.closeEditUserDialog();
  }

  closeUserDropdown() { this.closeUserEditDialogEmitter.emit(); }
}

