import {NgModule} from '@angular/core';
import {ToastModule} from 'primeng/toast';
import {MessageService} from "primeng/api";
import {CommonModule} from '@angular/common';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {UserComponent} from "./components/user/user.component";
import {PostComponent} from "./components/post/post.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {DashboardComponent} from "./dashboard.component";
import {TodosComponent} from './components/todos/todos.component';
import {SearchPipe} from "../../common/pipes/search.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserFormComponent} from "./components/user-form/user-form.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {PostFormComponent} from './components/post-form/post-form.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {CommentsComponent} from './components/comments/comments.component';
import {TabViewModule} from 'primeng/tabview';


@NgModule({
  declarations: [
    SearchPipe,
    PostComponent,
    UserComponent,
    TodosComponent,
    PostFormComponent,
    UserFormComponent,
    DashboardComponent,
    CommentsComponent,
  ],
  imports: [
    NgbModule,
    ToastModule,
    FormsModule,
    CommonModule,
    MessageModule,
    MessagesModule,
    HttpClientModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    ConfirmDialogModule,
    TabViewModule
  ],
  providers: [MessageService]
})

export class DashboardModule {
}
