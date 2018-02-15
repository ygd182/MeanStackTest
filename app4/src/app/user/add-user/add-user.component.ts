import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user/user.service';
import { User } from './../../models/user';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public user: User;
	public message: string;
  public userArray: any[];

  constructor(private userService: UserService) { 
  	
  	this.message = '';
    this.user = new User('');
  }

  ngOnInit() {
  }

  submit() {

  	this.userService.saveUser(this.user).subscribe( data => {
  		console.log(data);
  		this.message = 'submitted: '+ data._id;
  	});
  }


}

