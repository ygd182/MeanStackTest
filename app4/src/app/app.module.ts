import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';


import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { AppRouter } from './app.router';


import { ExpenseService } from './expense/expense.service';
import { UserService } from './user/user.service';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { ListExpenseComponent } from './expense/list-expense/list-expense.component';
import { AddExpenseComponent } from './expense/add-expense/add-expense.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploaderComponent,
    ImageViewerComponent,
    ListExpenseComponent,
    AddExpenseComponent,
    ListUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRouter,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    ExpenseService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
