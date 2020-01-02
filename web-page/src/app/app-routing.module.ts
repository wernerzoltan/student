import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UpdateUserComponent } from './update-user/update-user.component';


// itt adjuk hozzá a főoldalról elérhető url-eket és az azhokhoz kapcsolódó komponenseket
const routes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'full' },
  {path: 'user', component: UserComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'details/:id', component: UserDetailsComponent},
  {path: 'update/:id', component: UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
