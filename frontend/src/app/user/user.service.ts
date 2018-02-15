import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSettings } from './../app.settings';

@Injectable()
export class UserService {

	constructor(private http:Http) { }

  getUsers() {
  	return this.http.get(AppSettings.API_ENDPOINT + '/user').map( res => res.json() );
  }

  saveUser(user) {
  	let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  	return this.http.post('http://localhost:3000/user', user, options).map( res => res.json() );
  
  }

}
