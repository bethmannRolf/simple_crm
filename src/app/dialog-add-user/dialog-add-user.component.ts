import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  imports: [],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

user:User = new User();


@Output() close =new EventEmitter<void>();


closeDialog() {
  this.close.emit();
}


}
