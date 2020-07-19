import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';
import {JsonService} from '../_services/Json.service'

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

//Boost(Highcharts);
//noData(Highcharts);
//More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-gantt-chart',
  templateUrl: './gantt-chart.component.html',
  styleUrls: ['./gantt-chart.component.css']
})


export class GanttChartComponent implements OnInit {

  title = "app";
  chart;
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = "chart";
  chartCallback;
  chartOptions = {
    series: [
      {
        data: []
      }
    ],
    exporting: {
      enabled: true
    },
    yAxis: {
      allowDecimals: false,
      title: {
        text: "Data"
      }
    }
  };

 
  constructor(private Jservice : JsonService) { 
    const self = this;

    this.chartCallback = chart => {
      self.chart = chart;
    };
  }

  ngOnInit() {
    this.Jservice.getChartDataEvent.subscribe(data => {
      console.log("Data to update from DataService: ", data);
      this.updateData(data);
    });
  }

  updateData(data) {
    this.chartOptions.series = [
      {
        data: data
      }
    ];

    this.updateFromInput = true;
    this.chart.hideLoading();
  }

  onUpdateData() {
    this.chart.showLoading();
    this.Jservice.getChartData();
  }
}