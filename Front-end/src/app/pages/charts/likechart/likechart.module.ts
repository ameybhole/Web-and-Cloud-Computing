import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LikeChartComponent} from "./likechart.component";
import { ChartsModule } from "ng2-charts";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ChartsModule,
    ],
    declarations: [
        LikeChartComponent
    ],
    exports: [
        FormsModule,
        CommonModule,
        LikeChartComponent
    ]
})
export class LikeChartModule { }
