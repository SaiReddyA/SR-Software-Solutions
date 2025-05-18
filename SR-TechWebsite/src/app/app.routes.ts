import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { TestimonialComponent } from './Components/testimonial/testimonial.component';
import { ContactComponent } from './Components/contact/contact.component';
import { InstructerComponent } from './Components/instructer/instructer.component';
import { CourseEnrollComponent } from './Components/course-enroll/course-enroll.component';
import { TermsndConditionsComponent } from './Components/termsnd-conditions/termsnd-conditions.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'home/about', component:AboutComponent},
    {path:'home/courses', component:CoursesComponent},
    { path: 'home/courses/course-enroll/:coursename', component: CourseEnrollComponent },
    {path:'home/contact', component:ContactComponent},
    {path:'home/testimonial', component:TestimonialComponent},
    {path:'home/instructer', component:InstructerComponent},
    {path:'home/terms-conditions', component:TermsndConditionsComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
