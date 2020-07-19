import { Routes, RouterModule } from '@angular/router';

import { LineChartComponent } from './line-chart/line-chart.component';
import { HomeComponent } from './home/home.component'
import { GanttChartComponent } from './gantt-chart/gantt-chart.component';
import { TestChart1Component } from './test-chart1/test-chart1.component';
import { GanttChart1Component } from './gantt-chart1/gantt-chart1.component';
import { GanttChart2Component } from './gantt-chart2/gantt-chart2.component';


const routes: Routes = [
	{ path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    //{ path: 'LineChart', component: LineChartComponent },
    { path: 'GanttChart', component: GanttChartComponent },
    { path: 'TestChart', component: TestChart1Component },
    { path: 'GanntChart1', component: GanttChart1Component },
    { path: 'GanntChart2', component: GanttChart2Component },
	
	//{ path: 'news', component: NewsComponent },
	{ path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);

