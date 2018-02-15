import { Component, OnInit } from '@angular/core';
import { ExpenseService } from './../expense.service';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent implements OnInit {
	public expenseArray: any[];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
  	this.expenseService.getExpenses().subscribe( (data) => this.expenseArray = data);
  }

}
