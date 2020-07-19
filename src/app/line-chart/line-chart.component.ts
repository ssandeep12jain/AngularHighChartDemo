import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {JsonService} from '../_services/Json.service'

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  title = 'HighChartCustome';
  score = [];
  score2 = [];
  constructor(private Jservice : JsonService ) { 
    
  }
 
  ngOnInit() {
    this.getData();
  }

  getData()
  {debugger;
    this.Jservice.getJSON().subscribe(data => {
      debugger;
      for (var i = 0; i < data.data.length; i++) {
        this.score2.push(data.data[i].id);   
    }
    console.log(this.score2);
  });
    for (var i = 5; i < 10; i++) {
    this.score.push(i);   
    }
   console.log(this.score);
  }

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: this.score,
      type: 'line'
    }]
  };

}
