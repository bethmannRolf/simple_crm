import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-address-dialog',
  imports: [FormsModule],
  templateUrl: './address-dialog.component.html',
  styleUrl: './address-dialog.component.scss'
})
export class AddressDialogComponent {


    @Output() close = new EventEmitter<void>();

  closeAddressDetailDialog() {
    this.close.emit();
  }




}
