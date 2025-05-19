import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private router: Router) {}

  navigateTo(path: string | any[], queryParams: any = {}) {
    this.router.navigate(Array.isArray(path) ? path : [path], { queryParams });
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
