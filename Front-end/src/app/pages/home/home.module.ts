import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {HomeComponent} from "./home.component";
import {LineChartModule} from "../charts/linechart/linechart.module";


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }

];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        NgbModule.forRoot(),
        RouterModule.forChild(routes),
        LineChartModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { }
