import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { MainComponent } from '../components/main/main.component';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  user: any = null;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    const tempUser = localStorage.getItem('user');
    if (tempUser) {
      this.user = JSON.parse(tempUser);
      this.router.navigate(['']);

    }

  }

  async signInWithEmailAndPassword(email: string, password: string) {
    await this.afAuth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.user = user.user;
        localStorage.setItem('user', JSON.stringify(user.user));
      })
      .catch(erreur => {
        this.user = null;
      })
  }

  async SignOut() {
    await this.afAuth.signOut();
    this.user = null;
    localStorage.removeItem('user');
  }

  isUserLoggedIn(): boolean {
    return (this.user);
  }


}
