import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {PostComponent} from "./components/post/post.component";
import {UserComponent} from "./components/user/user.component";
import {TodosComponent} from "./components/todos/todos.component";
import {PostResolver} from "../../common/resolvers/post.resolver";
import {TodoResolver} from "../../common/resolvers/todo.resolver";
import {UserResolver} from "../../common/resolvers/user.resolver";
import {DashboardGuard} from "../../common/guards/dashboard.guard";
import {UsersResolver} from "../../common/resolvers/users.resolver";
import {PostFormComponent} from "./components/post-form/post-form.component";
import {UserFormComponent} from "./components/user-form/user-form.component";
import {CanDeactivateDashboardGuard} from "../../common/guards/can-deactivate-dashboard.guard";
import {CanDeactivateUserChangesGuard} from "../../common/guards/can-deactivate-user-changes.guard";
import {CommentsResolver} from "../../common/resolvers/comments.resolver";
import {CommentsComponent} from "./components/comments/comments.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [DashboardGuard],
    resolve: {users: UsersResolver},
    canDeactivate: [CanDeactivateDashboardGuard],
    children: [
      {path: '', redirectTo: 'user-info/1', pathMatch: 'full'},

      {path: 'user-info', redirectTo: 'user-info/1'},
      {path: 'user-info/:id', component: UserComponent, resolve: {user: UserResolver, post: PostResolver}},
      {
        path: 'edit-user/:id',
        component: UserFormComponent,
        canDeactivate: [CanDeactivateUserChangesGuard],
        resolve: {user: UserResolver}
      },
      {path: 'add-user', component: UserFormComponent,},

      {path: 'posts', redirectTo: 'posts/1'},
      {path: 'posts/:id', component: PostComponent, resolve: {post: PostResolver, user: UserResolver}},
      {path: 'posts/edit-post/:id', component: PostFormComponent, resolve: {post: PostResolver, user: UserResolver}},

      {path: 'todos/:id', component: TodosComponent, resolve: {todos: TodoResolver, user: UserResolver}},

      {
        path: 'comments/:id', component: CommentsComponent,
        resolve: {
          data: CommentsResolver,
          post: PostResolver,
          user: UserResolver
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
