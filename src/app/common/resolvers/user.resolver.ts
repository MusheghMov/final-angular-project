import {Observable} from 'rxjs';
import {User} from "../interfaces/user";
import {Injectable} from '@angular/core';
import {UserService} from "../services/api/user.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.userService.getUser(route.params['id']);
  }
}
