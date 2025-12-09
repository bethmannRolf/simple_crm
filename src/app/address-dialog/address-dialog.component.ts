import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';

@Component({
  selector: 'app-address-dialog',
  standalone: true,
  imports: [FormsModule, DialogEditAddressComponent],
  templateUrl: './address-dialog.component.html',
  styleUrl: './address-dialog.component.scss'
})
export class AddressDialogComponent {

  showDialogEditDetails = false;


  @Output() closeAddressDialog = new EventEmitter<void>();


  closeAddressDetailDialog() {

    console.log('Try close dialog')
    this.closeAddressDialog.emit();

  }

  editAddressDetails(){
  this.showDialogEditDetails = true;
}



}
