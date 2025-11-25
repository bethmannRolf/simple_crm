import { Component, EventEmitter, Output, inject } from '@angular/core';
import { User } from '../models/user.class';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";


@Component({
  selector: 'app-dialog-add-user',
  imports: [FormsModule, ProgressBarComponent],
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

  loading = false
  user: User = new User();
  @Output() close = new EventEmitter<void>();


  private firestore: Firestore = inject(Firestore);

  closeDialog() {
    this.close.emit();
  }

  async saveUser() {
    console.log('Current User is', this.user);
    this.loading = true
    try {

      const usersCollection = collection(this.firestore, 'users');


      await addDoc(usersCollection, {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        mailAddress: this.user.mailAddress,
        createdAt: new Date()
      });

      console.log('User erfolgreich gespeichert!');
      this.closeDialog();
      this.loading = false;
    } catch (error) {
      console.error('Fehler beim Speichern des Users:', error);
    }
  }
}

