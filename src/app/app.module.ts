import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AuthModule} from "./modules/auth/auth.module";
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from '@angular/platform-browser';
import {httpInterceptorProviders} from "./common/interceptors";
import {DashboardModule} from "./modules/dashboard/dashboard.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AuthModule,
    BrowserModule,
    DashboardModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
