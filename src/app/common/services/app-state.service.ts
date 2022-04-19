import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {Post} from "../interfaces/post";

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public posts = [];
  public post$ = new Subject<Post[]>();


  constructor() {
  }
}
