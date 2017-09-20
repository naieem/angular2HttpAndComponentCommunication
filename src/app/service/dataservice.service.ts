import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Data }           from '../model/data.model';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class DataserviceService {

  constructor (private http: Http) {}
  private commentsUrl = 'https://jsonplaceholder.typicode.com/posts';
  getDatas() : Observable<Data[]>{
    // ...using get request
    return this.http.get(this.commentsUrl)
                   // ...and calling .json() on the response to return data
                    .map((res:Response) => res.json())
                    //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));   
  }
}
