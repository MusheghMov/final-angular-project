import {Component, OnInit} from '@angular/core';
import {User} from "../../common/interfaces/user";
import {AuthService} from "../../common/services/auth.service";
import {ActivatedRoute, Router, RoutesRecognized} from "@angular/router";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public userId = this.activatedRoute.snapshot.params['id'];
  public userTs: User;
  public destination = 'user-info';
  public users: User[] = [];
  private navbarMenuBtnClicked: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  public ngOnInit(): void {


    this.onGetUserId();

    this.onGetDestination();

    this.userTs = this.users[0];

    this.router.navigate(['dashboard/user-info/1'])
  }

  private onGetUserId() {
    this.router
      .events
      .subscribe((res) => {
        if (res instanceof RoutesRecognized) {
          this.userId = res.state.root.firstChild.firstChild.params['id'];
          this.destination = res.state.root.firstChild.firstChild.url[0].path;
        }
      });
  }

  private onGetDestination() {
    this.users = this.activatedRoute.snapshot.data['users'];
  }

  public onLogout() {
    this.authService.logOut();
    this.router.navigate(['login']);
  }

  public onDetectUser(user: User) {
    this.userTs = user;
  }

  public onShowNavbarMenu(): void {
    if (window.innerWidth < 800) {
      if (this.navbarMenuBtnClicked) {
        document.getElementById('nav').style.height = '4em'
      } else {
        document.getElementById('nav').style.height = '24em'
      }
      this.navbarMenuBtnClicked = !this.navbarMenuBtnClicked;
    }


  }
}
