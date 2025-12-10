import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({
    projectId: "simple-crm-24bf3", appId: "1:237593957047:web:7be5c18b448a10861ab332", storageBucket: "simple-crm-24bf3.firebasestorage.app", apiKey: "AIzaSyCawpnjHPourssXVFP30h-hWUlbPKUnHKM", authDomain: "simple-crm-24bf3.firebaseapp.com", messagingSenderId: "237593957047", 
  })), provideFirestore(() => getFirestore())]
};
