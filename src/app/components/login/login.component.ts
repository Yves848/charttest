import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { loginResult } from 'src/app/interfaces/dialogs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response: loginResult = {
    email: '',
    password: ''
  }

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void {
  }

  clickOk() {
    this.ref.close(this.response);
  }

  clickCancel() {
    this.ref.close(null);
  }

}
