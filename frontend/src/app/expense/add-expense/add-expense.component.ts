import { Component, OnInit } from '@angular/core';
import { ExpenseService } from './../expense.service';
import { UserService } from './../../user/user.service';
import { Expense } from './../../models/expense';
import { User } from './../../models/user';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  public expense: Expense;
	public message: string;
  public userArray: any[];

  constructor(private expenseService: ExpenseService,
              private userService: UserService,
              private router: Router) { 
  	
  	this.message = '';
    this.expense = new Expense('', 0 , '', new User(''));
    this.userService.getUsers().subscribe( users => {
      this.userArray = users;
      this.expense = new Expense('', 0 , '', new User(this.userArray[0].name, this.userArray[0]._id));
    });

  }

  ngOnInit() {
  }

  submit() {

  	this.expenseService.saveExpense(this.expense).subscribe( data => {
  		console.log(data);
  		this.message = 'submitted: '+ data._id;
      setTimeout( () => this.router.navigateByUrl('/list-expense'), 1000 );
  	});
  }

  changeUser(userId) {
    this.expense.user.id = userId;
    console.log(userId);
  }

}
