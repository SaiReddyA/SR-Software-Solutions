import { Component } from '@angular/core';
import { Common_Modules, Material_Modules } from '../../app.config';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [Common_Modules, Material_Modules, FooterComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

}
