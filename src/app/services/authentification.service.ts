import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  user: any = null;

  constructor(private afAuth: AngularFireAuth) { }

  signInWithEmailAndPassword(email: string, password: string) {
    console.log(email, password);
  }


}
