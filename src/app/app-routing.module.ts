import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './Components/login/login.component';
import {UserDetailComponent} from './Components/user-detail/user-detail.component';
import {UserComponent} from './Components/user/user.component';

const routes: Routes = [
  {path : "" , component: LoginComponent},
  {path : "login" , component: LoginComponent},
  {path : "user",component:UserComponent},
  {path : "userdetail/:id", component : UserDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
