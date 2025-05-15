import { AfterViewInit, Component } from '@angular/core';
import { Common_Modules,Material_Modules } from '../../app.config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Common_Modules, Material_Modules],
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
 testimonials = [
    {
      name: 'Selena',
      role: 'Student',
      image: '/testimonial-1.jpg',
      text: 'The video lectures are clear and concise, and the quizzes are helpful for reviewing material.'
    },
    {
      name: 'Cris Levon',
      role: 'Student',
      image: '/testimonial-2.jpg',
      text: 'The e-learning site has a user-friendly interface and a diverse range of courses to choose from. The video lectures are informative and well-presented, and the quizzes are a great way to test knowledge retention.'
    },
    {
      name: 'Magnus Carlson',
      role: 'Student',
      image: '/testimonial-3.jpg',
      text: 'The video content is engaging and easy to follow, and the quizzes are beneficial for self-assessment.'
    },
    {
      name: 'Nyra Carl',
      role: 'Student',
      image: '/testimonial-4.jpg',
      text: 'The e-learning site is intuitive and offers a broad selection of courses. It would be helpful to have more interactive elements, such as live Q&A sessions with instructors.'
    }
  ];
}


