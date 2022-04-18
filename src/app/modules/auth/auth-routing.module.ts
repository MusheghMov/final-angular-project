import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';
import {LoginComponent} from "./components/login/login.component";
import {LoginGuard} from "../../common/guards/login.guard";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [

      {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
      {path: 'register', component: RegisterComponent},

  // {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
