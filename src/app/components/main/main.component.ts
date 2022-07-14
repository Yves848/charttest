import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data: any;
  options: any;
  width: number;
  height: number;

  constructor(public ds: DatabaseService) {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
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

    //this.width = document.body.offsetWidth;
    this.width = window.innerWidth / 2;
    this.height = window.innerHeight;
    console.log(this.width, this.height);
  }


  ngOnInit(): void {
  }

}
