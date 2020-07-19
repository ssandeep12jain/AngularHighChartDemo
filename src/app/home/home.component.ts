import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsService } from '../_services/posts.service';
import {JsonService} from '../_services/Json.service'
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any;
  loadingMessage: any;
  errorMessage: any;
  constructor(private http: HttpClient,private postsService: PostsService,private Jservice : JsonService) {
    const self = this;

    this.chartCallback = chart => {
      self.chart = chart;
    };
   }
  callApi() {
    this.loadingMessage = true;
    this.http.get('https://reqres.in/api/users?page=2')
      .subscribe(data => {
        console.log(data);
      },(err: any) => {
        this.errorMessage = "There are no posts pulled from the server!";
        this.loadingMessage = false;
      })
  }

  getPosts() {
    this.loadingMessage = true;

    this.postsService.getAllPosts()
      .subscribe((data: any) => {
        this.posts = data;
        this.loadingMessage = false;
      },
        (err: any) => {
          this.errorMessage = "There are no posts pulled from the server!";
          this.loadingMessage = false;
        })
  }

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

  ngOnInit() {
    // this.Jservice.getChartDataEvent.subscribe(data => {
    //   console.log("Data to update from DataService: ", data);
    //   this.updateData(data);
    // });
    //this.chart.showLoading();
    this.Jservice.getJSON().subscribe(x=>{
      let data =x.data.map(x=>x.id);
      this.updateData(data);
    })
   
  }

  updateData(data) {
    this.chartOptions.series = [
      {
        data: data
      }
    ];

    this.updateFromInput = true;
    //this.onUpdateData();
    //this.chart.hideLoading();
  }

  onUpdateData() {
    //this.Jservice.getChartData();
  }

}
