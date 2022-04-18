import {Observable, tap} from 'rxjs';
import {Post} from "../interfaces/post";
import {Injectable} from '@angular/core';
import {PostServices} from "../services/api/post.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {AppStateService} from "../services/app-state.service";

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<Post[]> {

  constructor(
    private postServices: PostServices,
    public appStateService: AppStateService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
    return this.postServices.getPosts(route.params['id'])
      .pipe(
        tap((res: Post[]) => this.appStateService.posts = res),
        tap((res: Post[]) => this.appStateService.post$.next(res)),
      );
  }
}
