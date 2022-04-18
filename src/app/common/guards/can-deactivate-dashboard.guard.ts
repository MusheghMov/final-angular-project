import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {DashboardComponent} from "../../modules/dashboard/dashboard.component";

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateDashboardGuard implements CanDeactivate<DashboardComponent> {
  canDeactivate(
    component?: DashboardComponent,
    currentRoute?: ActivatedRouteSnapshot,
    currentState?: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return confirm('do you really want to leave?');
  }

}
