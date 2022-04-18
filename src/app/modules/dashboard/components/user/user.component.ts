import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../../../common/interfaces/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public user: User = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((res) => {
      this.user = res['user']
    })

      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: {
          destination: 'user-info'
        },
        queryParamsHandling: 'merge',
        skipLocationChange: true
      });
  }
}

