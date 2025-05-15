import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { TestimonialComponent } from './Components/testimonial/testimonial.component';
import { ContactComponent } from './Components/contact/contact.component';
import { InstructerComponent } from './Components/instructer/instructer.component';
import { CourseEnrollComponent } from './Components/course-enroll/course-enroll.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'courses', component:CoursesComponent},
    {path:'course-enroll', component:CourseEnrollComponent},
    {path:'contact', component:ContactComponent},
    {path:'testimonial', component:TestimonialComponent},
    {path:'instructer', component:InstructerComponent},
];
