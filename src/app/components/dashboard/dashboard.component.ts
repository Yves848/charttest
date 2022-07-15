import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { poids } from '../../interfaces/data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  aWeight: poids[] = [];

  constructor(public ds: DatabaseService) {

  }

  ngOnInit(): void {
    this.aWeight = this.getWeights();
  }

  getWeights(): poids[] {
    return this.ds.aMesures.slice(-5);
  }

}
