import { Component } from '@angular/core';
import { AuthentificationService } from './services/authentification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'charttest';

  constructor(public as: AuthentificationService, private router: Router) {

  }

  isUserLoggedIn(): boolean {
    return this.as.user !== null;
  }

  poidsClick() {
    this.router.navigate(['poids']);
  }

}
