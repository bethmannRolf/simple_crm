import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-edit-dialog',
  imports: [FormsModule],
  templateUrl: './user-edit-dialog.component.html',
  styleUrl: './user-edit-dialog.component.scss'
})
export class UserEditDialogComponent {



      @Output() close = new EventEmitter<void>();


  closeUserEditDialog() {
    this.close.emit();
  }




}
