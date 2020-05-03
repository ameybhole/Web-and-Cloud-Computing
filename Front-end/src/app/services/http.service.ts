import {Injectable}  from "@angular/core";
import {Http, Response}  from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
    private host = "http://trumpsentimeter.ximing.nl";
    private url:string;

    constructor(private http:Http){
    }

    getData(link){
        this.url = this.host + "/" + link;
        return this.http.get(this.url).map((response: Response) => {
            return response.json()
        });
    }
}