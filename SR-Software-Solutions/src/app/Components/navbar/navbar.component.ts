import { Component, HostListener } from '@angular/core';
import { Common_Modules, Material_Modules } from '../../app.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [...Common_Modules, ...Material_Modules],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router:Router){}
  isDarkTheme = false;
 isNavbarCollapsed = true;
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
  }

  collapseNavbar(value:any) {
    if (window.innerWidth < 992) {
      this.isNavbarCollapsed = true;
    }
    this.router.navigate([value])

  }
@HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth >= 992) {
      this.isNavbarCollapsed = true;
    }
  }
}
