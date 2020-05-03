import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {LineChartComponent} from "./linechart.component";
import {ChartsModule} from "ng2-charts";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ChartsModule
    ],
    declarations: [
        LineChartComponent
    ],
    exports: [
        FormsModule,
        CommonModule,
        LineChartComponent
    ]
})
export class LineChartModule { }
