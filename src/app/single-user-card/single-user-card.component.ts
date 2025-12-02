import { Component, inject } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';
import { collectionData } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-user-card.component.html',
  styleUrls: ['./single-user-card.component.scss']
})
export class SingleUserCardComponent {

  private firestore = inject(Firestore);

  users$!: Observable<any[]>;

  constructor() {
    this.loadUsersRealtime();
  }

  loadUsersRealtime() {
    const usersCollection = collection(this.firestore, 'users');
    this.users$ = collectionData(usersCollection, { idField: 'id' });
  }
}
