import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public loaderState = false;

  constructor() { }

  public showLoader(): void {
    this.loaderState = true;
  }

  public hideLoader(): void {
    this.loaderState = false;
  }
}
