import { Component } from '@angular/core';
import { Common_Modules, Material_Modules } from '../../app.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [Common_Modules, Material_Modules],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
gmail = 'Saireddy.1.1919@gmail.com'
}
