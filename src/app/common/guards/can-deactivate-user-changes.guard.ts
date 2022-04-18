import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {UserFormComponent} from "../../modules/dashboard/components/user-form/user-form.component";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateUserChangesGuard implements CanDeactivate<unknown> {

  canDeactivate(
    component: UserFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(currentRoute.queryParams['addUser']) {
      return true;
    } else if(!component.changed){
      return true;
    } else {
      return confirm('Do you want to leave without saving changes?');
    }
  }
}
