import { Component } from '@angular/core';
import { Common_Modules, Material_Modules } from '../../app.config';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Common_Modules, Material_Modules, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
