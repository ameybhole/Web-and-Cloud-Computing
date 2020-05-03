import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../../services/data.service";

@Component({
    selector: 'likechart',
    templateUrl: './likechart.component.html'
})

export class LikeChartComponent {
    public data;
    private _subscription;
    public isfound = false;

    public lineChartData:Array<any>;
    public lineChartLabels:Array<any>;

    constructor(private route:ActivatedRoute, private dataService:DataService, private router:Router){
        this.data = this.dataService.getAllData()
        this.getSentimentData();
        this.getSentimentLabels();
        this.isFound()
    }

    ngAfterViewInit(){
        let vm = this;
        this._subscription = this.dataService.dataChangeEvent.subscribe((value) => {
            vm.changeData(vm.dataService.getAllData())

            vm.getSentimentLabels();
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
            var sentimentData = [];
            for(var sentiment in this.data.sentimental_analysis){
                sentimentData.push(parseFloat(this.data.sentimental_analysis[sentiment].retweet_count))
            }
            console.log(sentimentData)
            this.lineChartData = [{data: sentimentData, label: 'Amount of retweets'}]
        }
        return null;
    }

    public getSentimentLabels(){

        if(this.data.sentimental_analysis.length > 0) {
            var sentimentData = [];
            for(var sentiment in this.data.sentimental_analysis){
                sentimentData.push((sentimentData.length + 1).toString())
            }
            this.lineChartLabels = sentimentData;
            return;
        }
        return null;
    }

    public changeData(data){
        this.data = data;
    }


    // lineChart
    public lineChartOptions:any = {
        responsive: true,
        label: "test"
    };
    public lineChartColors:Array<any> = [
        { // grey
            backgroundColor: 'rgba(173, 216, 230, 0.6)',
            borderColor: 'blue',
            pointBackgroundColor: 'blue',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: 'blue',
            pointHoverBorderColor: 'blue'
        }
    ];
    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';

    public chartClicked(e:any):void {
        if(e.active.length > 0) {
            console.log(e.active[0]._index , '/analysis/' + this.data.sentimental_analysis[(e.active[0]._index)].id);

            this.router.navigateByUrl('/analysis/' + this.data.sentimental_analysis[(e.active[0]._index)].id);
        }
    }

    public chartHovered(e:any):void {
        console.log(e);
    }
}