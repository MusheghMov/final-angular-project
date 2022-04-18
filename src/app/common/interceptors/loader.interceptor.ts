import {Injectable} from '@angular/core';
import {delay, finalize, Observable} from 'rxjs';
import {Router} from "@angular/router";
import {LoaderService} from "../services/loader.service";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(
    private loaderService: LoaderService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.router.url === '/login') {
      this.loaderService.showLoader()
      return next.handle(request)
        .pipe(
          delay(1000),
          finalize(() => {
            this.loaderService.hideLoader();
          })
        );
    }
    return next.handle(request);
  }
}
