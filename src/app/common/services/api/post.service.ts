import {Injectable} from '@angular/core';
import {Post} from "../../interfaces/post";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostServices {

  constructor(
    private http: HttpClient
  ) {
  }

  public getPosts(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  }

}
