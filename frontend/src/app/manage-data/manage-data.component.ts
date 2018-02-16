import { Component, OnInit } from '@angular/core';
import { ManageDataService } from './manage-data.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-manage-data',
  templateUrl: './manage-data.component.html',
  styleUrls: ['./manage-data.component.css']
})
export class ManageDataComponent implements OnInit {
	message: string;

  constructor(private manageDataService: ManageDataService, private router: Router) { }

  ngOnInit() {
  	this.message = '';
  }

  import() {
  	this.manageDataService.import().subscribe( (data) => { 
  		this.message = 'imported';
  		setTimeout( () => this.router.navigateByUrl('/list-expense'), 1000 );

  	});
  }

}
