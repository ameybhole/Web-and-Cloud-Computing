import { Component, AfterViewInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {DataService} from "../../services/data.service";


@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
})

export class HomeComponent implements AfterViewInit {
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
