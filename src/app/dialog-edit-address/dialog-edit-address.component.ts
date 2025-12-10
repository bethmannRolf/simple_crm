import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {

  @Input() user!: User;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<User>();

  closeDialogEdit() {
    this.close.emit();
  }

  saveChanges() {
    this.save.emit({ ...this.user });
    this.close.emit();
  }
}