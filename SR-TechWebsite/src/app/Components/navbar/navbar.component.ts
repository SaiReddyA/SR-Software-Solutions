import { Component } from '@angular/core';
import { Common_Modules, Material_Modules } from '../../app.config';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [Common_Modules, Material_Modules],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isDarkTheme = false;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
  }
}
