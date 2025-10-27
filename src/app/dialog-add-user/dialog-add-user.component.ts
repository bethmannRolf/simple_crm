import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-add-user',
  imports: [],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

@Output() close =new EventEmitter<void>();


closeDialog() {
  this.close.emit();
}


}
