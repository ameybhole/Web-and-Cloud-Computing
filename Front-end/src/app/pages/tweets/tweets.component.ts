import {Component, AfterViewInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
    selector: 'tweets',
    templateUrl: 'tweets.component.html',
})

export class TweetComponent implements AfterViewInit {
    private _subscription;
    public data;

    constructor(private dataService:DataService){
        this.data = this.dataService.getAllData()
    }

    ngAfterViewInit(){
        let vm = this;
        this._subscription = this.dataService.dataChangeEvent.subscribe((value) => {
            vm.changeData(vm.dataService.getAllData())
        });
    }

    public changeData(data){
        this.data = data;
    }


}
