import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from './services/authentification.service';
import { DatabaseService } from './services/database.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'charttest';

  constructor(public as: AuthentificationService, private router: Router, public ds: DatabaseService) {
  }

  isUserLoggedIn(): boolean {
    return this.as.user !== null;
  }

  poidsClick() {
    this.router.navigate(['poids']);
  }

}
