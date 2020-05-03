import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {PieChartComponent} from "./piechart.component";
import {ChartsModule} from "ng2-charts";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ChartsModule,
    ],
    declarations: [
        PieChartComponent
    ],
    exports: [
        FormsModule,
        CommonModule,
        PieChartComponent
    ]
})
export class PieChartModule { }
