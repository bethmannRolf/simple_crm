import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { User } from '../models/user.class';

@Component({
  selector: 'app-address-dialog',
  standalone: true,
  imports: [CommonModule, DialogEditAddressComponent],
  templateUrl: './address-dialog.component.html',
  styleUrls: ['./address-dialog.component.scss']
})
export class AddressDialogComponent {

  @Input() user!: User;
  @Output() closeAddressDialogEmitter = new EventEmitter<void>();
  @Output() saveAddressEmitter = new EventEmitter<User>();

  showDialogEditDetails = false;

  editAddressDetails() { this.showDialogEditDetails = true;
    
   }
  closeDialogEdit() { 

    this.showDialogEditDetails = false;
    this.closeAddressDialog()
   }

  closeAddressDialog() { this.closeAddressDialogEmitter.emit(); 

  }


  saveAddress(updatedUser: User) {
    this.saveAddressEmitter.emit(updatedUser);
    this.showDialogEditDetails = false;
  }
}
