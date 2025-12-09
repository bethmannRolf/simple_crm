import { Component, inject } from '@angular/core';
import { Firestore, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { UserEditDialogComponent } from '../user-edit-dialog/user-edit-dialog.component';
import { AddressDialogComponent } from '../address-dialog/address-dialog.component';
import { User } from '../models/user.class';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [UserEditDialogComponent, AddressDialogComponent],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  user: User | any = {};
  userID: string = '';

  showEditUserDialog = false;
  showAddressDetailDialog = false;

  private route = inject(ActivatedRoute);
  private firestore = inject(Firestore);

  constructor() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (!id) return;
      this.userID = id;
      this.getUser();
    });
  }


  async getUser() {
    try {
      const ref = doc(this.firestore, 'users', this.userID);
      const snapshot = await getDoc(ref);
      if (snapshot.exists()) {
        this.user = { id: snapshot.id, ...snapshot.data() };
        console.log('User geladen:', this.user);
      } else {
        console.warn('User existiert nicht in Firestore');
      }
    } catch (error) {
      console.error('Fehler beim Laden des Users:', error);
    }
  }


  openUserEditDialog() { this.showEditUserDialog = true; }
  closeUserEditDialog() { this.showEditUserDialog = false; }

  async saveUserEdit(updatedUser: User) {
    this.user = { ...updatedUser };
    try {
      const userRef = doc(this.firestore, 'users', this.userID);
      await updateDoc(userRef, {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        mailAddress: this.user.mailAddress
      });
      console.log('User erfolgreich aktualisiert!');
    } catch (error) {
      console.error('Fehler beim Aktualisieren des Users:', error);
    }
    this.showEditUserDialog = false;
  }

  openAddressDetailDialog() { this.showAddressDetailDialog = true; }
  closeAddressDetailDialog() { this.showAddressDetailDialog = false; }

  async saveAddress(updatedUser: User) {
    this.user = { ...updatedUser };
    try {
      const userRef = doc(this.firestore, 'users', this.userID);
      await updateDoc(userRef, {
        zipCode: this.user.zipCode,
        city: this.user.city
      });
      console.log('Adresse erfolgreich aktualisiert!');
    } catch (error) {
      console.error('Fehler beim Aktualisieren der Adresse:', error);
    }
    this.showAddressDetailDialog = false;
  }
}
