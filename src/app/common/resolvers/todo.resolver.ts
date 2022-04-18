import {Observable} from 'rxjs';
import {Todo} from "../interfaces/todo";
import {Injectable} from '@angular/core';
import {TodoService} from "../services/api/todo.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoResolver implements Resolve<Todo[]> {

  constructor(private todoService: TodoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo[]> {
    return this.todoService.getTodoByUserId(route.params['id'])
  }
}
