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
      labels: ['un', 'deux', 'trois'],
      datasets: [
        {
          label: 'Evolution Poids',
          data: [10, 30, 20],
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

  async refresh() {
    const aLabels: string[] = [];
    const aWeights: number[] = [];
    await this.ds.weights.forEach(async (element: poids) => {
      aLabels.push(element.date);
      aWeights.push(element.poids);
      console.log('poids', aWeights);
    })
    this.data = {
      labels: aLabels,
      datasets: [
        {
          label: 'Evolution Poids',
          data: aWeights,
          borderColor: '#42A5F5',
          tension: .4
        }
      ]
    }
  }

  ngOnInit(): void {
    this.refresh();
  }

}
