import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public as: AuthentificationService) { }

  ngOnInit(): void {
  }

  async signIn() {
    await this.as.signInWithEmailAndPassword('yves.godart@gmail.com', 'daeGh@id375@@');
  }

  async signOut() {
    await this.as.SignOut();
  }

  isUserLoggedIn(): boolean {
    return this.as.user !== null;
  }

  userName(): string {
    return this.as.user.displayName;
  }

}
