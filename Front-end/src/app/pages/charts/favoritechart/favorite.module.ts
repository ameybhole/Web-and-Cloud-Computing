import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {FavoriteChartComponent} from "./favorite.component";
import { ChartsModule } from "ng2-charts";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ChartsModule,
    ],
    declarations: [
        FavoriteChartComponent
    ],
    exports: [
        FormsModule,
        CommonModule,
        FavoriteChartComponent
    ]
})
export class FavoriteChartModule { }
