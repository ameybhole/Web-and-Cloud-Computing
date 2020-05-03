import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../../services/data.service";

@Component({
    selector: 'piechart',
    templateUrl: './piechart.component.html'
})
export class PieChartComponent {
    public data;
    private _subscription;
    public isfound = false;

    public doughnutChartLabels:string[] = ['Positive', 'Negative', 'Neutral'];
    public doughnutChartData:number[];
    public doughnutChartType:string = 'doughnut';
    public chartColors:Array<any> = [
        { // first color
            backgroundColor: ['rgba(0, 128, 0, 0.6)', 'rgba(255, 0, 0, 0.6)', 'rgba(255, 165, 0, 0.6)'],
            borderColor: ['rgb(0, 128, 0)', 'rgb(255, 0, 0)', 'rgb(255, 165, 0)']
        }
    ];

    public lineChartData:Array<any>;

    constructor(private route:ActivatedRoute, private dataService:DataService){
        this.data = this.dataService.getAllData()
        this.getSentimentData();
        this.isFound()
    }

    ngAfterViewInit(){
        let vm = this;
        this._subscription = this.dataService.dataChangeEvent.subscribe((value) => {
            vm.changeData(vm.dataService.getAllData())

            vm.getSentimentData();
            vm.isFound();
        });

    }

    public isFound(){
        if(this.data.sentimental_analysis.length > 0){
            this.isfound = true;
            return;
        }
        this.isfound = false;
        return;
    }

    public getSentimentData(){
        if(this.data.sentimental_analysis.length > 0) {
            var count = [0,0,0];
            for(var sentiment in this.data.sentimental_analysis){
                if(this.data.sentimental_analysis[sentiment].sentiment > 0){
                    count[0]+= 1;
                }else if(this.data.sentimental_analysis[sentiment].sentiment < 0){
                    count[1]+= 1;
                }else if(this.data.sentimental_analysis[sentiment].sentiment == 0){
                    count[2]+= 1;
                }
            }

            this.doughnutChartData = count;
        }
        return null;
    }

    public changeData(data){
        this.data = data;
    }


    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }
}