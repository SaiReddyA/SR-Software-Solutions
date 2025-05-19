import { Component } from '@angular/core';
import { Common_Modules, Material_Modules } from '../../app.config';
import { FooterComponent } from '../footer/footer.component';
import { NavigationService } from '../../Services/navigation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [...Common_Modules, ...Material_Modules, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
 constructor(private navigation: NavigationService) {}

  goToCourses() {
    this.navigation.navigateTo('/home');
  }
}
