import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private as: AuthentificationService) { }

  ngOnInit(): void {
  }

  signIn() {
    this.as.signInWithEmailAndPassword('yves.godart@gmail.com', 'daeGh@id375@@');
  }

}
