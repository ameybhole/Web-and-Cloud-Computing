import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AnalysisComponent } from './analysis.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BarChartModule} from "../charts/barchart/barchart.module";
import {LineChartModule} from "../charts/linechart/linechart.module";
import {PieChartModule} from "../charts/piechart/piechart.module";
import {LikeChartModule} from "../charts/likechart/likechart.module";
import {FavoriteChartModule} from "../charts/favoritechart/favorite.module";

const routes: Routes = [{
	path: '',
	data: {
      title: 'Analysis',
      urls: [{title: 'Analysis',url: '/analysis'},{title: 'Analysis page'}]
    },
	component: AnalysisComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule,
		NgbModule.forRoot(),
		RouterModule.forChild(routes),
		BarChartModule,
		LineChartModule,
		PieChartModule,
		LikeChartModule,
        FavoriteChartModule
    ],
	declarations: [
		AnalysisComponent
	]
})
export class AnalysisModule { }