import { Component, EventEmitter, Output, inject } from '@angular/core';
import { User } from '../models/user.class';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-add-user',
  imports: [FormsModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'] // Hinweis: styleUrls statt styleUrl
})
export class DialogAddUserComponent {

  user: User = new User();
  @Output() close = new EventEmitter<void>();

  // Firestore injizieren
  private firestore: Firestore = inject(Firestore);

  closeDialog() {
    this.close.emit();
  }

  async saveUser() {
    console.log('Current User is', this.user);

    try {
      // Collection 'users' erstellen oder verwenden
      const usersCollection = collection(this.firestore, 'users');

      // Neues Dokument hinzufügen
      await addDoc(usersCollection, {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        mailAddress: this.user.mailAddress,
        createdAt: new Date()
      });

      console.log('User erfolgreich gespeichert!');
      this.closeDialog(); // Dialog nach Speichern schließen
    } catch (error) {
      console.error('Fehler beim Speichern des Users:', error);
    }
  }
}

