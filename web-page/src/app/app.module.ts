import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    UpdateUserComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
