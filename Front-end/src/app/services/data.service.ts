import {Injectable}  from "@angular/core";
import {Subject} from "rxjs/Subject";

@Injectable()
export class DataService {
    private data = {
        'twitter_list': [],
        'sentimental_analysis': []
    };
    public dataChangeEvent: Subject<string> = new Subject<string>();

    private TWITTER_LIST = 'twitter_list';
    private SENTIMENTAL_ANALYSIS = 'sentimental_analysis';

    private change = "";


    public addData(data){
        if(data.data_type == undefined) return;

        switch(data.data_type){
            case this.TWITTER_LIST:
                this.data[this.TWITTER_LIST] = data.message;
                break;
            case this.SENTIMENTAL_ANALYSIS:
                this.data[this.SENTIMENTAL_ANALYSIS] = data.message;
                break;
        }
        this.dataChangeEvent.next(this.change)
    }

    public getDataByType(datatype){
        return this.data[datatype];
    }

    public getAllData(){
        return this.data;
    }

    public hasData(){
        if(this.data.twitter_list.length > 0 || this.data.sentimental_analysis.length > 0)
            return true;
        else
            return false;
    }
}