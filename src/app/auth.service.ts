import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User | null>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user$ = this.firebaseAuth.user;
   }

  signUp(email: string, password: string) {
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email: string, password: string) {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.firebaseAuth.signOut();
  }
}
