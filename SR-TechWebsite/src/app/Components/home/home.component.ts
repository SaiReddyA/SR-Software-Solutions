import { Component } from '@angular/core';
import { Common_Modules,Material_Modules } from '../../app.config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Common_Modules, Material_Modules],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
