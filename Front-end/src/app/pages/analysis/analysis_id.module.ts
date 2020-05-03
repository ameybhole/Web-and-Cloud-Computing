import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BarChartModule} from "../charts/barchart/barchart.module";
import {LineChartModule} from "../charts/linechart/linechart.module";
import {PieChartModule} from "../charts/piechart/piechart.module";
import {AnaylisisIdComponent} from "./analysis_id.component";

const routes: Routes = [{
	path: '',
	data: {
      title: 'AnalysisId',
      urls: [{title: 'Analysis',url: '/analysis/:id'},{title: 'Analysis page'}]
    },
	component: AnaylisisIdComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule,
		NgbModule.forRoot(),
		RouterModule.forChild(routes),
		BarChartModule,
		LineChartModule,
		PieChartModule
    ],
	declarations: [
		AnaylisisIdComponent
	]
})
export class AnalysisIdModule { }