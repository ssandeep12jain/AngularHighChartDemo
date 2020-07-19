import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import GanttModule from 'highcharts/modules/gantt';

declare var require: any;
//let Boost = require('highcharts/modules/boost');
//let noData = require('highcharts/modules/no-data-to-display');
//let More = require('highcharts/highcharts-more');
//let gantt = require('highcharts/modules/gantt');

//Boost(Highcharts);
//noData(Highcharts);
//More(Highcharts);
//noData(Highcharts);
//gantt(Highcharts);
GanttModule(Highcharts);
@Component({
  selector: 'app-gantt-chart1',
  templateUrl: './gantt-chart1.component.html',
  styleUrls: ['./gantt-chart1.component.css']
})
export class GanttChart1Component implements OnInit {

  public options: any = {
    
    title: {
      text: 'Gantt Chart with Progress Indicators'
    },
    xAxis: {
      min: Date.UTC(2014, 10, 17),
      max: Date.UTC(2014, 10, 30)
    },
  
    series: [{
      name: '',
      data: [{
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
    }]
  }

  constructor() { }

  ngOnInit(){
    Highcharts.ganttChart('container', this.options);
  }

}
