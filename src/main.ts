// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


// src/main.ts
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';
// import { firebaseConfig } from './app/firebase.config';

//  bootstrapApplication(AppComponent, {
//   providers: [
//     provideFirebaseApp(() => initializeApp(firebaseConfig)),
//     provideFirestore(() => getFirestore()),
//   ],
// }).catch((err) => console.error(err));



import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from './app/firebase.config';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // <-- wichtig für ActivatedRoute
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ]
}).catch(err => console.error(err));
