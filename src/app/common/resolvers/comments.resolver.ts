import {map, Observable, switchMap} from 'rxjs';
import {Injectable} from '@angular/core';
import {Comment} from "../interfaces/comment";
import {CommentService} from "../services/api/comment.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PostServices} from "../services/api/post.service";
import {Post} from "../interfaces/post";

@Injectable({
  providedIn: 'root'
})
export class CommentsResolver implements Resolve<Comment[][]> {

  constructor(
    private postServices: PostServices,
    private commentService: CommentService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.postServices.getPosts(route.params['id'])
      .pipe(
        switchMap((posts: Post[]) => {
          return this.commentService.getComments()
            .pipe(
              map((comments: Comment[]) => ({comments, posts}))
            )
        }),
        map((res: { comments: Comment[], posts: Post[] }) => {


          res.posts.forEach((post: Post) => {
            post.comments = res.comments.filter((item: Comment) => item.postId === post.id);
          });

          return res.posts;

        }),
      )
  }
}
