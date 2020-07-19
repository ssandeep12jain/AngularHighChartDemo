import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HomeComponent } from './home/home.component'
import { GanttChartComponent } from './gantt-chart/gantt-chart.component';
import { TestChart1Component } from './test-chart1/test-chart1.component';
import { GanttChart1Component } from './gantt-chart1/gantt-chart1.component';
import { GanttChart2Component } from './gantt-chart2/gantt-chart2.component';

import { routing } from './app.routing.module';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptorService } from './_services/loader-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LineChartComponent,
    GanttChartComponent,
    TestChart1Component,
    GanttChart1Component,
    GanttChart2Component,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule,
    HighchartsChartModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }