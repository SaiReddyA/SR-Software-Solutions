import { AfterViewInit, Component } from '@angular/core';
import { Common_Modules,Material_Modules } from '../../app.config';
import { FooterComponent } from '../footer/footer.component';
import { Course, SRTechService } from '../../Services/srtech.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Common_Modules, Material_Modules, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
ngAfterViewInit() {
  // const carousel = document.querySelector('#yourCarouselId'); // Replace with your actual carousel ID
  // if (carousel) {
  //   carousel.addEventListener('slid.bs.carousel', () => {
  //     const captions = carousel.querySelectorAll('.carousel-caption');
  //     captions.forEach(caption => {
  //       caption.classList.remove('animate__animated', 'animate__fadeInUp');
  //       void caption; // reflow to re-trigger animation
  //       caption.classList.add('animate__animated', 'animate__fadeInUp');
  //     });
  //   });
  // }
}

constructor(private service:SRTechService, private router:Router){
   this.LoadCourses()
   this.LoadReviews()
}
courses:Course[] = []
LoadCourses(){
  this.service.LoadCourses().subscribe({
    next:(res)=>{
        this.courses = res.slice(0, 12);
    }
  })
}
testimonials: any[] = []
LoadReviews(){
this.service.LoadReviews().subscribe({
    next:(res)=>{
        this.testimonials = res
    }
  })
}

NavigateTo(url:any){
  this.router.navigate(['/home/courses/course-enroll/' + url])
}
 
}


