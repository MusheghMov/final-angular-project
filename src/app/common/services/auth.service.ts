import {Injectable} from '@angular/core';
import {CanDeactivateDashboardGuard} from "../guards/can-deactivate-dashboard.guard";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user = JSON.parse(<string>localStorage.getItem('user')) || {
    email: '',
    password: ''
  };

  constructor(private canDeactivateDashboardGuard: CanDeactivateDashboardGuard,
              private router: Router) {
  }

  public logOut(): void {
    if (this.canDeactivateDashboardGuard.canDeactivate()) {
      this.user = {
        email: '',
        password: ''
      }
      localStorage.clear();
      this.router.navigate(['auth/login']);
    }
  }

  public logIn(params) {
    this.user = params;
  }
}
