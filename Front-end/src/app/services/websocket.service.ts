import {Injectable} from "@angular/core";
import Pusher from 'pusher-js';
import {Subject} from "rxjs/Subject";

@Injectable()


export class WebsocketService {
    //URL
    private url = 'http://localhost:6001';

    //Pusher
    private API_KEY = '1ce2b55eca7c5e8ca09e';
    private APP_CLUSTER = 'eu';
    private socket;
    private channel;

    //Data
    public dataChangeEvent: Subject<string> = new Subject<string>();
    public data;

    makeConnection() {
        this.socket = new Pusher(this.API_KEY, {
            cluster: this.APP_CLUSTER,
            encrypted: false
        });
    }

    subscribe(){
        this.channel = this.socket.subscribe('twitter')
    }

    receiveMessages(){
        let vm = this;

        this.channel.bind('App\\Events\\TwitterDataEvent', function (data) {
            vm.changeData(data);
        });
    }

    public changeData(data){
        this.data = data;
        this.dataChangeEvent.next(this.data)
    }

    public getData(){
        return this.data;
    }

}