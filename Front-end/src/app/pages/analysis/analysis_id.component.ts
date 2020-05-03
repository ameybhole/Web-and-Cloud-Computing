import { Component, AfterViewInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../services/data.service";
import { DecimalPipe } from '@angular/common';

@Component({
    selector: 'analysis_id',
    templateUrl: 'analysis_id.component.html'
})

export class AnaylisisIdComponent implements AfterViewInit {
    private sub;
    public id;
    private _subscription;
    public tweetIndex;
    public data;
    public isfound = false;

    constructor(private route:ActivatedRoute, private dataService:DataService){
        this.data = this.dataService.getAllData()
        this.isFound()
    }

    ngAfterViewInit(){
        let vm = this;
        this._subscription = this.dataService.dataChangeEvent.subscribe((value) => {
            vm.changeData(vm.dataService.getAllData())
        });

    }

    ngAfterContentInit(){
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
            this.isFound();
        });
    }

    public changeData(data){
        this.data = data;
        this.isFound()
    }

    public isFound(){
        for(var tweet in this.data.twitter_list){
            if(this.data.twitter_list[tweet].id == this.id){
                this.tweetIndex = tweet;
                this.isfound = true;
                return;
            }
        }
        this.isfound = false;
        return;
    }
}
