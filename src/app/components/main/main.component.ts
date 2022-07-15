import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  width: number;
  height: number;

  constructor(public ds: DatabaseService) {
    ds.getdb();

    //this.width = document.body.offsetWidth;
    this.width = window.innerWidth / 2;
    this.height = window.innerHeight;
    console.log(this.width, this.height);
  }


  ngOnInit(): void {
    setTimeout(() => {
      this.ds.getdb();
    }, 1000)
  }

}
