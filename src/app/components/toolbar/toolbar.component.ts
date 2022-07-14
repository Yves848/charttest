import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginComponent } from '../login/login.component';
import { loginResult } from '../../interfaces/dialogs'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  providers: [DialogService],
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public as: AuthentificationService, public ds: DialogService) { }

  ngOnInit(): void {

  }

  async logIn() {
    const ref = this.ds.open(LoginComponent, {
      header: "Login infos"
    });

    ref.onClose.subscribe((data: loginResult) => {
      if (data) {
        console.log('result', data);
        this.signIn(data.email, data.password);
      }
      else {
        console.log('cancel', data);
      }
    });
  }

  async signIn(email: string, password: string) {
    await this.as.signInWithEmailAndPassword(email, password);
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
