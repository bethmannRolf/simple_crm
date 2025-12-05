import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-address-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './address-dialog.component.html',
  styleUrl: './address-dialog.component.scss'
})
export class AddressDialogComponent {


  @Output() closeAddressDialog = new EventEmitter<void>();


  closeAddressDetailDialog() {

    console.log('Try close dialog')
    this.closeAddressDialog.emit();

  }




}
