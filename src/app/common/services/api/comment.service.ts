import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Comment} from "../../interfaces/comment";
import {Params} from "@angular/router";
import {PostServices} from "./post.service";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    public p: PostServices,
    private http: HttpClient,
  ) {
  }

  public getComments(params: Params = {}) {
    return this.http.get<Comment[]>(
      `https://jsonplaceholder.typicode.com/comments`,
      {
        params: {
          ...params
        },
      }
    );
  }


}
