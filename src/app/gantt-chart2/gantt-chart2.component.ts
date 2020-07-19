import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

import GanttModule from 'highcharts/modules/gantt';
import {JsonService} from '../_services/Json.service'

declare var require: any;
GanttModule(Highcharts);
@Component({
  selector: 'app-gantt-chart2',
  templateUrl: './gantt-chart2.component.html',
  styleUrls: ['./gantt-chart2.component.css']
})
export class GanttChart2Component implements OnInit {

  title = 'HighChartCustome';
  score = [];
  score2 = [];
  chart;
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = "ganttChart";
  chartCallback;
  options: any = {
    
    title: {
      text: 'Gantt Chart with Progress Indicators',
    },
    xAxis: {
      min: Date.UTC(2014, 10, 17),
      max: Date.UTC(2014, 10, 30)
    },
    series: [{
      name: '',
      data: this.score
    }]
  }
  constructor(private Jservice : JsonService ) { 
    
  }
 
  ngOnInit() {
    debugger;
   // this.Jservice.getJSON().subscribe(x=>{
     // let data =x.data;
    let data=  [{
      name: 'Start prototype',
      start: Date.UTC(2014, 10, 18),
      end: Date.UTC(2014, 10, 25),
      completed: 0.25
    }, {
      name: 'Test prototype',
      start: Date.UTC(2014, 10, 27),
      end: Date.UTC(2014, 10, 29)
    }, {
      name: 'Develop',
      start: Date.UTC(2014, 10, 20),
      end: Date.UTC(2014, 10, 25),
      completed: {
        amount: 0.12,
        fill: '#fa0'
      }
    }, {
      name: 'Run acceptance tests',
      start: Date.UTC(2014, 10, 23),
      end: Date.UTC(2014, 10, 26)
    }]
     // this.updateData(data);
    
    Highcharts.ganttChart('container', this.options);
  }

 /* getData()
  {
    this.Jservice.getJSON().subscribe(data => {
      
        this.score2.push(data);    
  });
    
  }
  */
  updateData(data) {
    debugger;
    this.options.series = [
      {
        data: data
      }
    ];

    this.updateFromInput = true;
    //this.onUpdateData();
    //this.chart.hideLoading();
  }
 

 

}
