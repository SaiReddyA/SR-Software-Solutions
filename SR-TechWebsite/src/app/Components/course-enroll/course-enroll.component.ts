import { Component } from '@angular/core';
import { Common_Modules, Material_Modules } from '../../app.config';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-course-enroll',
  standalone: true,
  imports: [Common_Modules, Material_Modules, FooterComponent],
  templateUrl: './course-enroll.component.html',
  styleUrl: './course-enroll.component.css'
})
export class CourseEnrollComponent {

}
