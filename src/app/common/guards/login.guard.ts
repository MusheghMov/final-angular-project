import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.user.email && this.authService.user.password) {
      this.router.navigate(['dashboard/user-info/1']);
      return false;
    }
    return true;
  }

}
