import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface Course {
  title: string;
  type: 'Normal' | 'Combo';
  imageUrl: string;
  level: string;
  duration: string;
  rating: number;
  learners: string;
  price: number;
  isPaid: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SRTechService {

  constructor() { }

LoadCourses():Observable<Course[]>{
  try{
    return of(this.courses)
  }catch(er){
    console.error(er)
     return of([]);
  }
}
LoadReviews():Observable<any[]>{
  try{
    return of(this.testimonials)
  }catch(er){
    console.error(er)
     return of([]);
  }
}
  courses: Course[] = [
  // 🌟 Normal Courses
  {
    title: 'OOps Cocepts',
    type: 'Normal',
    imageUrl: '/img/oops-concept.png',
    level: 'Beginner',
    duration: '3.5 Hrs',
    rating: 4.3,
    learners: '2.1L+',
    price: 3499,
    isPaid: true
  },
  {
    title: 'C#',
    type: 'Normal',
    imageUrl: '/img/csharp.png',
    level: 'Beginner',
    duration: '5.5 Hrs',
    rating: 4.6,
    learners: '3.4L+',
    price: 4499,
    isPaid: true
  },
  {
    title: 'SQL Server',
    type: 'Normal',
    imageUrl: '/img/sqlserver.png',
    level: 'Intermediate',
    duration: '10.0 Hrs',
    rating: 4.7,
    learners: '4.5L+',
    price: 5999,
    isPaid: true
  },
  {
    title: 'ADO.NET',
    type: 'Normal',
    imageUrl: '/img/adonet.png',
    level: 'Intermediate',
    duration: '4.0 Hrs',
    rating: 4.5,
    learners: '2.5L+',
    price: 4999,
    isPaid: true
  },
  {
    title: 'Dapper',
    type: 'Normal',
    imageUrl: '/img/dapper.png',
    level: 'Intermediate',
    duration: '5.0 Hrs',
    rating: 4.4,
    learners: '1.7L+',
    price: 3999,
    isPaid: true
  },
  {
    title: 'Entity Framework Core',
    type: 'Normal',
    imageUrl: '/img/ef.png',
    level: 'Intermediate',
    duration: '5.0 Hrs',
    rating: 4.6,
    learners: '3.1L+',
    price: 4999,
    isPaid: true
  },
  {
    title: 'Angular',
    type: 'Normal',
    imageUrl: '/img/angular.png',
    level: 'Beginner',
    duration: '6.0 Hrs',
    rating: 4.5,
    learners: '3.5L+',
    price: 4499,
    isPaid: true
  },
  {
    title: 'React JS',
    type: 'Normal',
    imageUrl: '/img/react.png',
    level: 'Beginner',
    duration: '5.0 Hrs',
    rating: 4.7,
    learners: '3.9L+',
    price: 4499,
    isPaid: true
  },
  {
    title: 'HTML5',
    type: 'Normal',
    imageUrl: '/img/html.jpg',
    level: 'Beginner',
    duration: '3.0 Hrs',
    rating: 4.5,
    learners: '3.0L+',
    price: 999,
    isPaid: true
  },
  {
    title: 'CSS3',
    type: 'Normal',
    imageUrl: '/img/css.jpg',
    level: 'Beginner',
    duration: '4.5 Hrs',
    rating: 4.55,
    learners: '2.6L+',
    price: 2999,
    isPaid: true
  },
   {
    title: 'JavaScript',
    type: 'Normal',
    imageUrl: '/img/javascript.jpg',
    level: 'Beginner',
    duration: '4.0 Hrs',
    rating: 4.4,
    learners: '4.0L+',
    price: 4499,
    isPaid: true
  },
  {
    title: 'Git',
    type: 'Normal',
    imageUrl: '/img/git.png',
    level: 'Beginner',
    duration: '3.5 Hrs',
    rating: 4.3,
    learners: '2.3L+',
    price: 2999,
    isPaid: true
  },
  {
    title: 'ASP.NET Core',
    type: 'Normal',
    imageUrl: '/img/aspnetcore.png',
    level: 'Intermediate',
    duration: '6.5 Hrs',
    rating: 4.6,
    learners: '3.0L+',
    price: 4499,
    isPaid: true
  },
  {
    title: 'ASP.NET Core MVC',
    type: 'Normal',
    imageUrl: '/img/mvccore.png',
    level: 'Intermediate',
    duration: '9.5 Hrs',
    rating: 4.5,
    learners: '2.9L+',
    price: 4999,
    isPaid: true
  },
  {
    title: 'WPF',
    type: 'Normal',
    imageUrl: '/img/wpf.png',
    level: 'Intermediate',
    duration: '6.5 Hrs',
    rating: 4.3,
    learners: '2.4L+',
    price: 4999,
    isPaid: true
  },
  {
    title: 'LINQ',
    type: 'Normal',
    imageUrl: '/img/linq.png',
    level: 'Intermediate',
    duration: '4.5 Hrs',
    rating: 4.4,
    learners: '2.2L+',
    price: 2999,
    isPaid: true
  },
  {
    title: 'TypeScript',
    type: 'Normal',
    imageUrl: '/img/typescript.png',
    level: 'Beginner',
    duration: '4.5 Hrs',
    rating: 4.6,
    learners: '2.8L+',
    price: 4499,
    isPaid: true
  },
  {
    title: 'SQLite',
    type: 'Normal',
    imageUrl: '/img/sqlite.png',
    level: 'Intermediate',
    duration: '5.5 Hrs',
    rating: 4.3,
    learners: '1.9L+',
    price: 3999,
    isPaid: true
  },
  {
    title: 'jQuery',
    type: 'Normal',
    imageUrl: '/img/jquery.png',
    level: 'Beginner',
    duration: '3.5 Hrs',
    rating: 4.2,
    learners: '2.2L+',
    price: 4499,
    isPaid: true
  },
  // {
  //   title: '.NET Core',
  //   type: 'Normal',
  //   imageUrl: '/img/course-dotnetcore.jpg',
  //   level: 'Intermediate',
  //   duration: '6.5 Hrs',
  //   rating: 4.6,
  //   learners: '3.8L+',
  //   price: 4499,
  //   isPaid: true
  // },
  // {
  //   title: 'ASP.NET',
  //   type: 'Normal',
  //   imageUrl: '/img/course-aspnet.jpg',
  //   level: 'Intermediate',
  //   duration: '6.0 Hrs',
  //   rating: 4.5,
  //   learners: '3.2L+',
  //   price: 4499,
  //   isPaid: true
  // },
  {
    title: 'Ajax',
    type: 'Normal',
    imageUrl: '/img/ajax.png',
    level: 'Beginner',
    duration: '3.0 Hrs',
    rating: 4.2,
    learners: '1.8L+',
    price: 1999,
    isPaid: true
  },

  // 🧩 Combo Courses
  {
    title: 'ASP.NET Core MVC + EF + SQL Server',
    type: 'Combo',
    imageUrl: '/img/mvc-ef-sql.png',
    level: 'Intermediate',
    duration: '10.0 Hrs',
    rating: 4.6,
    learners: '5.2L+',
    price: 10999,
    isPaid: true
  },
  {
    title: 'Angular + Dapper  + SQL Server',
    type: 'Combo',
    imageUrl: '/img/angular-sql.png',
    level: 'Intermediate',
    duration: '11.5 Hrs',
    rating: 4.7,
    learners: '6.0L+',
    price: 11999,
    isPaid: true
  },
  {
    title: 'React JS + ADO.NET + SQL Server',
    type: 'Combo',
    imageUrl: '/img/react-sql.png',
    level: 'Intermediate',
    duration: '8.5 Hrs',
    rating: 4.7,
    learners: '4.8L+',
    price: 11999,
    isPaid: true
  }
];
testimonials = [
    {
      name: 'Anjali R.',
      image: '/img/testimonial-1.jpg',
      text: 'Joining SR Software Solutions helped me master .NET Full Stack Development. The practical sessions and real-world projects were a game-changer. I got placed as a software developer within 3 months!'
    },
    {
      name: 'Rahul T.',
      image: '/img/testimonial-2.jpg',
      text: 'The trainers at SR Software Solutions are amazing. The .NET Core and Angular combo course was extremely detailed, and the mock interviews boosted my confidence. Highly recommended!'
    },
    {
      name: 'Swetha M.',
      image: '/img/testimonial-3.jpg',
      text: 'I had zero coding background, but the structured training in C#, ADO.NET, and SQL Server gave me a solid foundation. I\'m now confidently building full-stack applications.'
    },
    {
      name: 'Mohammed A.',
      image: '/img/testimonial-4.jpg',
      text: 'Excellent training and real-time use cases! I cracked multiple interviews after learning MVC, Entity Framework, and Dapper from SR Software Solutions. Thank you for the continuous support!'
    }
  ];
}
