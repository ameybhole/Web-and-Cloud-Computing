import { Component} from '@angular/core';
import {WebsocketService} from "./services/websocket.service";
import {HttpService} from "./services/http.service";
import {DataService} from "./services/data.service";
import {Subject} from "rxjs/Subject";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

    private _subscription;

    constructor(private webSocket:WebsocketService, private httpService:HttpService,  private dataService:DataService){

    }

    ngAfterViewInit(){
        this.webSocket.makeConnection();
        this.webSocket.subscribe();
        this.webSocket.receiveMessages();

        this.httpService.getData('api/tweets').subscribe(Response => {
            this.dataService.addData(Response)
        });

        this.httpService.getData('api/sentiment').subscribe(Response => {
            this.dataService.addData(Response)
        });

        let vm = this;
        this._subscription = this.webSocket.dataChangeEvent.subscribe((value) => {
            vm.dataService.addData(vm.webSocket.getData());
        });
    }



}