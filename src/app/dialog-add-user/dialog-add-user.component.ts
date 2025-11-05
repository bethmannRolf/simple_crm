import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../models/user.class';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dialog-add-user',
  imports: [FormsModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

user:User = new User();


@Output() close =new EventEmitter<void>();


closeDialog() {
  this.close.emit();
}



saveUser(){
  console.log('Current User is', this.user)
}


}
