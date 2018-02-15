import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSettings } from './../app.settings';

@Injectable()
export class ExpenseService {

	constructor(private http:Http) { }

  getExpenses() {
  	return this.http.get(AppSettings.API_ENDPOINT + '/expense').map( res => res.json() );
  }

  saveExpense(expense) {
  	let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  	return this.http.post('http://localhost:3000/expense', expense, options).map( res => res.json() );
  
  }

}
