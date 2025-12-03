import { Component, inject } from '@angular/core';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

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
}
