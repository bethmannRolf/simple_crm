import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {

  @Input() user!: User;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<User>();

  closeDialog() { this.close.emit(); }

  saveChanges() {
    this.save.emit({ ...this.user }); 
    this.close.emit();
  }
}