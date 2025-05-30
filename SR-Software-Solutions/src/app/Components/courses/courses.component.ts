import { Component } from '@angular/core';
import { Common_Modules, Material_Modules } from '../../app.config';
import { FooterComponent } from '../footer/footer.component';
import { Course, SRTechService } from '../../Services/srtech.service';
import { Router } from '@angular/router';
import { NavigationService } from '../../Services/navigation.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [...Common_Modules, ...Material_Modules, FooterComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  constructor(private service:SRTechService, private router:Router,
        public navigation:NavigationService
  ){
     this.LoadCourses()
  }
  courses:Course[] = []
  LoadCourses(){
    this.service.LoadCourses().subscribe({
      next:(res)=>{
          this.courses = res
      }
    })
  }
NavigateTo(url:any){
  this.router.navigate(['/home/courses/course-enroll/' + url])
}
}
