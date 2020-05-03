import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarChartComponent} from "./barchart.component";
import {ChartsModule} from "ng2-charts";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ChartsModule,
    ],
    declarations: [
        BarChartComponent
    ],
    exports: [
        FormsModule,
        CommonModule,
        BarChartComponent
    ]
})
export class BarChartModule { }
