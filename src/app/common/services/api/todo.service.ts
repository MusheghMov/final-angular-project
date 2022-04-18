import {Observable} from "rxjs";
import {Injectable} from '@angular/core';
import {Todo} from "../../interfaces/todo";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public getTodoByUserId(userId: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`https://jsonplaceholder.typicode.com/todos?userId=${(userId)}`);
  }

}
