import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSettings } from './../app.settings';


@Injectable()
export class ManageDataService {

  constructor(private http:Http) { }

  import() {
  	let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  	return this.http.post('http://localhost:3000/file', {}, options);
  
  }

}
