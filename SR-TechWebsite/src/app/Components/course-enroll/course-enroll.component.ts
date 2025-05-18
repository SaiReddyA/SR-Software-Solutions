import { Component, Inject } from '@angular/core';
import { Common_Modules, Material_Modules } from '../../app.config';
import { FooterComponent } from '../footer/footer.component';
import { DOCUMENT } from '@angular/common';
import { SRTechService } from '../../Services/srtech.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-enroll',
  standalone: true,
  imports: [Common_Modules, Material_Modules, FooterComponent],
  templateUrl: './course-enroll.component.html',
  styleUrl: './course-enroll.component.css'
})
export class CourseEnrollComponent {
//  course = {
//     title: 'HTML Course for Beginners',
//     description: 'Start at the beginning by learning HTML basics...',
//     rating: 4.6,
//     learners: '5.8L+',
//     level: 'Beginner',
//     duration: '2.0 Hrs',
//     price: 0,
//     originalPrice: 20,
//     instructor: 'Sai Reddy',
//     image: 'assets/img/course-1.jpg',
//     topics: [
//       'Elements and Structure',
//       'Tables',
//       'Forms',
//       'Semantic HTML'
//     ],
//     syllabus: [
//        'Introduction to HTML',
//         'HTML Document Standards',
//         'HTML Tables',
//         'HTML Forms',
//         'Form Validation',
//         'Semantic HTML'
//     ],
//     skills: [
//       'Structure pages with HTML',
//       'Present data with tables',
//       'Write cleaner HTML'
//     ]
//   };

//   course = {
//   title: 'HTML Course for Beginners',
//   subtitle: 'Start at the beginning by learning HTML basics — an important foundation for building and editing web pages.',
//   description: `Fun fact: all websites use HTML — even this one. It's a fundamental part of every web developer's toolkit. HTML provides the content that gives web pages structure, by using elements and tags, you can add text, images, videos, forms, and more. Learning HTML basics is an important first step in your web development journey and an essential skill for front- and back-end developers`,
//   rating: 4.6,
//   learners: '5.8L+',
//   level: 'Beginner',
//   duration: '2.0 Hrs',
//   price: 2999,
//   originalPrice: 20,
//   instructor: 'Sai Reddy',
//   image: 'img/html.jpg',
//   lectures: 4,
//   enrolled: '240 students',
//   language: 'English, Telugu',
//   deadline: 'Life Time',
//   certificate: 'Yes',
//   Url:'html-for-beginers',
//   topics: [
//     'Elements and Structure',
//     'Tables',
//     'Forms',
//     'Semantic HTML'
//   ],

//   syllabus: [
//         'Introduction to HTML',
//         'HTML Document Standards',
//         'HTML Tables',
//         'HTML Forms',
//         'Form Validation',
//         'Semantic HTML'
//   ],

//   skills: [
//     'Structure pages with HTML',
//     'Present data with tables',
//     'Write cleaner HTML'
//   ]
// };
shareUrl: string = '';
  constructor(@Inject(DOCUMENT) private document: Document,
              private service:SRTechService,
              private route: ActivatedRoute,
              private router:Router) {

              }
  
course:any
ngOnInit(): void {
    const origin = this.document.location.origin;
    this.shareUrl = `${origin}/courses/course-enroll`;
    //this.shareUrl = this.route.url.;
    const courseUrl = this.route.snapshot.paramMap.get('coursename');
    debugger
    if(courseUrl){
      this.service.getCourseByUrl(courseUrl).subscribe(course => {
      if(course){
        this.course = course;
        this.shareUrl += `/${course?.url}`
      }else{
         this.router.navigate(['/home/courses'])
      }
    });
    }else{
      //this.router.navigate(['/home/courses'])
    }

}



}
