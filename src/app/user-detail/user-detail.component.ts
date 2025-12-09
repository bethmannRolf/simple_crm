import { Component, inject } from '@angular/core';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AddressDialogComponent } from '../address-dialog/address-dialog.component';
import { UserEditDialogComponent } from '../user-edit-dialog/user-edit-dialog.component';



@Component({
  selector: 'app-user-detail',
  imports:[AddressDialogComponent, UserEditDialogComponent],
  standalone: true,
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  showAddressDetailDialog = false;
  showEditUserDialog = false;


  user: any = {};
  userID: string = '';

  private route = inject(ActivatedRoute);
  private firestore = inject(Firestore);

  constructor() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (!id) {
        console.warn('Noch keine ID vorhanden – Route lädt...');
        return;
      }

      this.userID = id;
      this.getUser();
    });
  }

  async getUser() {
    try {
      const ref = doc(this.firestore, 'users', this.userID);
      const snapshot = await getDoc(ref);

      if (snapshot.exists()) {
        this.user = snapshot.data();
        console.log('User geladen:', this.user);
      } else {
        console.warn('User existiert nicht in Firestore');
      }
    } catch (error) {
      console.error('Fehler beim Laden des Users:', error);
    }
  }

openAddressDetailDialog(){
this.showAddressDetailDialog = true;
}



closeAddressDetailDialog(){
this.showAddressDetailDialog = false;
}

openUserEditDialog()  {
this.showEditUserDialog = true;
}


closeUserEditDialog(){
this.showEditUserDialog = false;
}











}


