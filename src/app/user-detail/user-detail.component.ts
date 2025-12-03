import { Component, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore/lite';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  private route = inject(ActivatedRoute);
    private firestore = inject(Firestore);

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }
}
