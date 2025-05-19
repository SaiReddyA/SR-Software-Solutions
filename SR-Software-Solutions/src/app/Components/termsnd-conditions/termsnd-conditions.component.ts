import { Component } from '@angular/core';
import { Common_Modules, Material_Modules } from '../../app.config';
import { FooterComponent } from '../footer/footer.component';
import { NavigationService } from '../../Services/navigation.service';

@Component({
  selector: 'app-termsnd-conditions',
  standalone: true,
  imports: [...Common_Modules, ...Material_Modules, FooterComponent],
  templateUrl: './termsnd-conditions.component.html',
  styleUrl: './termsnd-conditions.component.css'
})
export class TermsndConditionsComponent {
gmail = 'saireddy.1.1919.com'
constructor(public navigation:NavigationService){}
}
