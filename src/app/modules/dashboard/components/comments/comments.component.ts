import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../../../common/interfaces/user";
import {AppStateService} from "../../../../common/services/app-state.service";
import {Post} from "../../../../common/interfaces/post";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  public user: User;
  public userId: number;
  public commentsArr = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    public appStateService: AppStateService
  ) {
  }

  ngOnInit(): void {


    this.appStateService.post$
      .subscribe((res: Post[]) => {
      })

    this.activatedRoute.params
      .subscribe((res) => {
        this.userId = res['id'];
      })

    this.activatedRoute.data.subscribe((res) => {
      this.user = res['user'];
      this.commentsArr = res['data'];
    })


  }

}
