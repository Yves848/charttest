import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';
import { poids } from 'src/app/interfaces/data';
import { ASTWithName } from '@angular/compiler';

@Component({
  selector: 'app-weightchart',
  templateUrl: './weightchart.component.html',
  styleUrls: ['./weightchart.component.css']
})
export class WeightchartComponent implements OnInit {
  data: any;
  options: any;
  constructor(private ds: DatabaseService) {

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
    var aLabels = this.ds.aLabels.slice(-10);
    var aWeights = this.ds.aWeights.slice(-10);
    console.log('refresh', aLabels, aWeights);
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

  retrieveAll() {
    var labels: string[];
    this.ds.getAll().snapshotChanges().subscribe(data => {
      console.log('retrieveAll', data.map(e => {
        console.log('e', e.payload.doc.data());
      }));
    })
    /*this.ds.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.tutorials = data;
    });*/
  }


  async ngOnInit() {
    //this.retrieveAll();
    setTimeout(() => {
      this.refresh();
    }, 500);

  }

}
