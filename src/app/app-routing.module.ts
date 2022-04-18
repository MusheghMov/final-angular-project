import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./modules/auth/auth.component";

const routes: Routes = [
  {path: 'login', component: AuthComponent},
  {path: '**', redirectTo: 'dashboard/user-info/1', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
