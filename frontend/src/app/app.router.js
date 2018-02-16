import { Routes, RouterModule } from '@angular/router';


import { ListExpenseComponent } from './expense/list-expense/list-expense.component';
import { AddExpenseComponent } from './expense/add-expense/add-expense.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ManageDataComponent } from './manage-data/manage-data.component';

const routes = [
  { path: '', redirectTo: '/list-expense', pathMatch: 'full' },
  { path: 'list-expense', component: ListExpenseComponent },
  { path: 'add-expense', component: AddExpenseComponent },
  { path: 'add-user', component: AddUserComponent},
  { path: 'manage-data', component: ManageDataComponent}
];

export const AppRouter = RouterModule.forRoot(routes);