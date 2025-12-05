import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-edit-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-edit-dialog.component.html',
  styleUrl: './user-edit-dialog.component.scss'
})
export class UserEditDialogComponent {



  @Output() closeUserEditDialog = new EventEmitter<void>();


  closeUserDetailEditDialog() {
    console.log('Try close user dialog')
    this.closeUserEditDialog.emit();
  }




}
