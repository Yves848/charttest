import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';
import { poids } from 'src/app/interfaces/data';

@Component({
  selector: 'app-weightchart',
  templateUrl: './weightchart.component.html',
  styleUrls: ['./weightchart.component.css']
})
export class WeightchartComponent implements OnInit {
  data: any;
  options: any;
  constructor(private ds: DatabaseService) {
    this.data = {
      labels: [],
      datasets: [
        {
          label: 'Evolution Poids',
          data: [],
          borderColor: '#42A5F5',
          tension: .4
        }
      ]
    }

    this.options = {
      title: {
        display: true,
        text: 'My Title',
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      }
    };
  }

  ngOnInit(): void {
    const data: poids[] = [];

  }

}
