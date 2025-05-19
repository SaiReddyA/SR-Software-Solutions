import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// export interface Course {
//   title: string;
//   type: 'Normal' | 'Combo';
//   imageUrl: string;
//   level: string;
//   duration: string;
//   rating: number;
//   learners: string;
//   price: number;
//   isPaid: boolean;
// }
export interface Course {
  title: string;
  type: 'Normal' | 'Combo';
  imageUrl: string;
  level: string;
  duration: string;
  rating: number;
  learners: string;
  price: number;
  originalPrice?:number;
  isPaid: boolean;

  // Additional properties for detailed view
  subtitle?: string;
  description?: string;
  instructor?: string;
  lectures?: number;
  enrolled?: string;
  language?: string;
  deadline?: string;
  certificate?: string;
  url?: string;
  topics?: string[];
  syllabus?: string[];
  skills?: string[];
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
getCourseByUrl(courseName:string):Observable<Course | undefined>{
  try{
   const found = this.courses?.find(item => item.url === courseName);
  if (!found) {
    console.warn(`Course not found: ${courseName}`);
  }
  return of(found);
  }catch(er){
    console.error(er)
     return of(undefined);
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
    isPaid: true,
    subtitle: 'Master Object-Oriented Programming concepts in C#.',
    description: 'Understand the four pillars of OOP and how to implement them in real-world applications using C#.',
    instructor: 'Sai Reddy',
    lectures: 5,
    enrolled: '210000 students',
    language: 'English',
    deadline: 'Life Time',
    certificate: 'Yes',
    url: 'oops-course',
    topics: ['Classes & Objects', 'Encapsulation', 'Inheritance', 'Polymorphism', 'Abstraction'],
    syllabus: [
      'Introduction to OOP',
      'Encapsulation and Constructors',
      'Inheritance and Access Modifiers',
      'Polymorphism and Overriding',
      'Abstraction and Interfaces'
    ],
    skills: [
      'Apply OOP in projects',
      'Write clean, reusable code',
      'Use SOLID principles'
    ]
  },
   {
     title: 'C#',
     subtitle: 'Master the C# language for desktop, web, and backend development.',
     description: 'Learn the syntax, OOP concepts, LINQ, exception handling, and more.',
     rating: 4.6,
     learners: '3.4L+',
     level: 'Beginner',
     duration: '5.5 Hrs',
     price: 4499,
     isPaid: true,
     originalPrice: 4999,
     instructor: 'Sai Reddy',
     imageUrl: 'img/csharp.png',
     lectures: 6,
     enrolled: '340000 students',
     language: 'English',
     deadline: 'Life Time',
     certificate: 'Yes',
     url: 'csharp-course',
     topics: ['Syntax Basics', 'OOP', 'LINQ', 'Error Handling'],
     syllabus: [
       'C# Syntax and Data Types',
       'Object-Oriented Programming',
       'Exception Handling in C#',
       'Working with LINQ',
       'Collections and Generics'
     ],
     skills: [
       'Write clean C# code',
       'Understand OOP principles',
       'Perform data manipulation with LINQ'
     ],
     type: 'Normal',
   },
  {
    title: 'SQL Server',
    subtitle: 'Query, manage, and optimize relational databases using SQL Server.',
    description: 'Learn SQL queries, stored procedures, joins, indexing, and transactions.',
    rating: 4.7,
    learners: '4.5L+',
    level: 'Intermediate',
    duration: '10.0 Hrs',
    price: 5999,
    originalPrice: 6999,
    instructor: 'Sai Reddy',
    imageUrl: 'img/sqlserver.png',
    lectures: 12,
    enrolled: '450000 students',
    language: 'English',
    deadline: 'Life Time',
    certificate: 'Yes',
    url: 'sql-server-course',
    topics: ['SQL Queries', 'Stored Procedures', 'Indexing', 'Joins'],
    syllabus: [
      'Introduction to SQL Server',
      'Basic to Advanced SQL Queries',
      'Stored Procedures and Functions',
      'Joins and Subqueries',
      'Transactions and Error Handling'
    ],
    skills: [
      'Write complex SQL queries',
      'Use stored procedures',
      'Manage and secure SQL databases'
    ],
    isPaid:true,
    type:'Normal'
  },
  {
    title: 'ADO.NET',
    subtitle: 'Access and manage data using ADO.NET.',
    description: 'Learn about connections, commands, DataReaders, and DataSets.',
    rating: 4.5,
    learners: '2.0L+',
    level: 'Beginner',
    duration: '4.0 Hrs',
    price: 2499,
    originalPrice: 2999,
    instructor: 'Sai Reddy',
    imageUrl: 'img/adonet.png',
    lectures: 6,
    enrolled: '200000 students',
    language: 'English',
    deadline: 'Life Time',
    certificate: 'Yes',
    url: 'adonet-course',
    topics: ['Data Access', 'Connection Management', 'DataReader', 'DataSet'],
    syllabus: [
      'Understanding ADO.NET Architecture',
      'Creating Connections',
      'Command Objects and Queries',
      'Using DataReader and DataAdapter',
      'Working with DataSet'
    ],
    skills: [
      'Access SQL data with ADO.NET',
      'Manage DB connections and queries',
      'Use disconnected architecture'
    ],
    type: 'Normal',
    isPaid: true
  },
  {
    title: 'Dapper',
    subtitle: 'High-performance Micro ORM for .NET applications.',
    description: 'Use Dapper for lightweight data access and queries in .NET.',
    rating: 4.7,
    learners: '1.1L+',
    level: 'Intermediate',
    duration: '3.0 Hrs',
    price: 2499,
    originalPrice: 2999,
    instructor: 'Sai Reddy',
    imageUrl: 'img/dapper.png',
    lectures: 5,
    enrolled: '110000 students',
    language: 'English',
    deadline: 'Life Time',
    certificate: 'Yes',
    url: 'dapper-course',
    topics: ['Micro ORM', 'CRUD Operations', 'Stored Procedures'],
    syllabus: [
      'Getting Started with Dapper',
      'Executing Queries and Mapping Results',
      'CRUD Operations',
      'Using Stored Procedures',
      'Dapper with ASP.NET Core'
    ],
    skills: [
      'Use Dapper in .NET',
      'Perform fast DB operations',
      'Integrate Dapper with APIs'
    ],
    type: 'Normal',
    isPaid:true
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
  isPaid: true,
  subtitle: 'Work with data using Entity Framework Core.',
  description: 'Master data access using EF Core including Code First, Migrations, and LINQ queries.',
  instructor: 'Sai Reddy',
  lectures: 9,
  enrolled: '310000 students',
  language: 'English',
  deadline: 'Life Time',
  certificate: 'Yes',
  url: 'efcore-course',
  topics: ['DbContext', 'Migrations', 'LINQ', 'Relationships', 'CRUD'],
  syllabus: [
    'Introduction to EF Core',
    'Setting up DbContext and Models',
    'Migrations and Database Creation',
    'Performing CRUD Operations',
    'LINQ Queries and Relationships'
  ],
  skills: [
    'Use EF Core in .NET apps',
    'Perform database operations',
    'Design relational models with ease'
  ]
},
  {
    title: 'Angular',
    subtitle: 'Learn to build dynamic SPAs using Angular framework.',
    description: 'Understand Angular components, routing, services, and HTTP client.',
    rating: 4.5,
    learners: '3.5L+',
    level: 'Beginner',
    duration: '6.0 Hrs',
    price: 4499,
    originalPrice: 4999,
    instructor: 'Sai Reddy',
    imageUrl: 'img/angular.png',
    lectures: 10,
    enrolled: '350000 students',
    language: 'English',
    deadline: 'Life Time',
    certificate: 'Yes',
    url: 'angular-course',
    topics: ['Components', 'Services', 'Routing', 'Forms'],
    syllabus: [
      'Introduction to Angular',
      'Creating Components',
      'Using Services and Dependency Injection',
      'Angular Routing',
      'Reactive Forms and Template-Driven Forms'
    ],
    skills: [
      'Build dynamic frontends',
      'Create reusable components',
      'Handle user inputs effectively'
    ],
    type:'Normal',
    isPaid:true
  },
  {
    title: 'React',
    subtitle: 'Build modern web apps with React and JSX.',
    description: 'Understand components, hooks, props, and state to build powerful UIs.',
    rating: 4.6,
    learners: '3.1L+',
    level: 'Beginner',
    duration: '5.0 Hrs',
    price: 4499,
    originalPrice: 4999,
    instructor: 'Sai Reddy',
    imageUrl: 'img/react.png',
    lectures: 8,
    enrolled: '310000 students',
    language: 'English',
    deadline: 'Life Time',
    certificate: 'Yes',
    url: 'react-course',
    topics: ['JSX', 'Components', 'Props and State', 'Hooks'],
    syllabus: [
      'Introduction to React',
      'Creating Components and JSX',
      'Managing State and Props',
      'React Hooks',
      'Routing with React Router'
    ],
    skills: [
      'Build component-based apps',
      'Use React hooks',
      'Manage routing and state'
    ],
    type:'Normal',
    isPaid: true
  },
  {
    title: 'HTML5 Beginners',
    subtitle: 'Start at the beginning by learning HTML basics...',
    description: `Fun fact: all websites use HTML — even this one...`,
    rating: 4.6,
    learners: '5.8L+',
    level: 'Beginner',
    duration: '2.0 Hrs',
    price: 2999,
    originalPrice: 20,
    instructor: 'Sai Reddy',
    imageUrl: 'img/html.jpg',
    lectures: 4,
    enrolled: '240 students',
    language: 'English, Telugu',
    deadline: 'Life Time',
    certificate: 'Yes',
    url: 'html-for-beginers',
    topics: ['Elements and Structure', 'Tables', 'Forms', 'Semantic HTML'],
    syllabus: [
      'Introduction to HTML',
      'HTML Document Standards',
      'HTML Tables',
      'HTML Forms',
      'Form Validation',
      'Semantic HTML'
    ],
    skills: [
      'Structure pages with HTML',
      'Present data with tables',
      'Write cleaner HTML'
    ],
    type: 'Normal',
    isPaid: true
  },
  {
    title: 'CSS3',
    subtitle: 'Style modern websites using CSS.',
    description: 'Learn about selectors, positioning, flexbox, and animations.',
    rating: 4.4,
    learners: '2.1L+',
    level: 'Beginner',
    duration: '3.0 Hrs',
    price: 2499,
    originalPrice: 2999,
    instructor: 'Sai Reddy',
    imageUrl: 'img/css.jpg',
    lectures: 5,
    enrolled: '210000 students',
    language: 'English',
    deadline: 'Life Time',
    certificate: 'Yes',
    url: 'css-course',
    topics: ['Selectors', 'Box Model', 'Flexbox', 'Transitions'],
    syllabus: [
      'CSS Basics and Selectors',
      'Box Model and Positioning',
      'Working with Flexbox and Grid',
      'Responsive Design with Media Queries',
      'CSS Transitions and Animations'
    ],
    skills: [
      'Style HTML pages',
      'Create responsive layouts',
      'Animate elements with CSS'
    ],
    type: 'Normal',
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
  isPaid: true,
  subtitle: 'Fundamentals of client-side scripting.',
  description: 'Learn JavaScript from the ground up including syntax, DOM manipulation, and ES6 features.',
  instructor: 'Sai Reddy',
  lectures: 8,
  enrolled: '400000 students',
  language: 'English',
  deadline: 'Life Time',
  certificate: 'Yes',
  url: 'javascript-course',
  topics: ['Variables', 'Functions', 'Loops', 'DOM', 'ES6 Features'],
  syllabus: [
    'JavaScript Basics',
    'Control Structures and Functions',
    'Working with Arrays and Objects',
    'DOM Manipulation',
    'Modern JS and ES6 Syntax'
  ],
  skills: [
    'Write basic JavaScript programs',
    'Manipulate the DOM',
    'Understand modern JS features'
  ]
},
   {
    title: 'Git',
    subtitle: 'Version control your code using Git.',
    description: 'Understand commits, branches, merges, and working with GitHub.',
    rating: 4.7,
    learners: '2.5L+',
    level: 'Beginner',
    duration: '2.5 Hrs',
    price: 1999,
    originalPrice: 2499,
    instructor: 'Sai Reddy',
    imageUrl: 'img/git.png',
    lectures: 4,
    enrolled: '250000 students',
    language: 'English',
    deadline: 'Life Time',
    certificate: 'Yes',
    url: 'git-course',
    topics: ['Commits', 'Branches', 'Merge', 'Remote Repos'],
    syllabus: [
      'Getting Started with Git',
      'Tracking Changes with Commits',
      'Working with Branches',
      'Merging and Resolving Conflicts',
      'Pushing to GitHub'
    ],
    skills: [
      'Version control code',
      'Collaborate with Git and GitHub',
      'Handle branches and merges'
    ],
    type: 'Normal',
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
  isPaid: true,
  subtitle: 'Build scalable web apps with ASP.NET Core.',
  description: 'Learn the fundamentals of ASP.NET Core to build modern web applications using MVC pattern and REST APIs.',
  instructor: 'Sai Reddy',
  lectures: 10,
  enrolled: '300000 students',
  language: 'English',
  deadline: 'Life Time',
  certificate: 'Yes',
  url: 'aspnetcore-course',
  topics: ['ASP.NET Core Basics', 'Controllers', 'Views', 'Routing', 'Dependency Injection'],
  syllabus: [
    'Introduction to ASP.NET Core',
    'MVC Pattern and Razor Views',
    'Routing and Middleware',
    'Dependency Injection',
    'API Creation and Deployment'
  ],
  skills: [
    'Create web apps using ASP.NET Core',
    'Work with middleware and services',
    'Implement MVC architecture'
  ]
},
  {
    title: 'ASP.NET Core MVC',
    subtitle: 'Build dynamic web applications using ASP.NET Core MVC framework.',
    description: 'From Controllers to Views and Entity Framework – develop full-stack .NET apps.',
    rating: 4.5,
    learners: '2.9L+',
    level: 'Intermediate',
    duration: '9.5 Hrs',
    price: 4999,
    originalPrice: 6999,
    instructor: 'Sai Reddy',
    imageUrl: 'img/mvccore.png',
    lectures: 15,
    enrolled: '290000 students',
    language: 'English',
    deadline: 'Life Time',
    certificate: 'Yes',
    url: 'aspnet-core-mvc-course',
    topics: ['Controllers', 'Views', 'Models', 'Entity Framework'],
    syllabus: [
      'Getting Started with ASP.NET Core',
      'Understanding MVC Architecture',
      'Creating and Consuming APIs',
      'Entity Framework Integration',
      'Authentication and Authorization'
    ],
    skills: [
      'Develop full-stack .NET apps',
      'Build REST APIs',
      'Use EF Core for data access'
    ],
    type: 'Normal',
    isPaid: true
  },
  {
    title: 'WPF',
    subtitle: 'Develop desktop applications using Windows Presentation Foundation.',
    description: 'Learn about XAML, MVVM, data binding, and custom controls.',
    rating: 4.5,
    learners: '2.2L+',
    level: 'Intermediate',
    duration: '7.0 Hrs',
    price: 3999,
    originalPrice: 4999,
    instructor: 'Sai Reddy',
    imageUrl: 'img/wpf.png',
    lectures: 9,
    enrolled: '220000 students',
    language: 'English',
    deadline: 'Life Time',
    certificate: 'Yes',
    url: 'wpf-course',
    topics: ['XAML', 'MVVM', 'Data Binding', 'Custom Controls'],
    syllabus: [
      'WPF Basics and Layout',
      'Working with Controls',
      'MVVM Architecture',
      'Data Binding Techniques',
      'Styling and Resources'
    ],
    skills: [
      'Create rich desktop UIs',
      'Use MVVM effectively',
      'Build custom WPF components'
    ],
    type:'Normal',
    isPaid: true
  },
 {
    title: 'LINQ',
    subtitle: 'Master Language Integrated Query in .NET.',
    description: 'Learn to write expressive and readable queries for collections and databases.',
    rating: 4.6,
    learners: '1.9L+',
    level: 'Intermediate',
    duration: '3.5 Hrs',
    price: 2499,
    originalPrice: 2999,
    instructor: 'Sai Reddy',
    imageUrl: 'img/linq.png',
    lectures: 7,
    enrolled: '190000 students',
    language: 'English',
    deadline: 'Life Time',
    certificate: 'Yes',
    url: 'linq-course',
    topics: ['Query Syntax', 'Method Syntax', 'Deferred Execution'],
    syllabus: [
      'Introduction to LINQ',
      'Query vs Method Syntax',
      'Filtering and Sorting',
      'Aggregations and Joins',
      'Working with LINQ to SQL'
    ],
    skills: [
      'Write LINQ queries',
      'Manipulate collections and data',
      'Work with LINQ to SQL'
    ],
    type: 'Normal',
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
    isPaid: true,
    subtitle: 'Typed superset of JavaScript for scalable apps.',
    description: 'Learn TypeScript to add strong typing to JavaScript and build robust applications.',
    instructor: 'Sai Reddy',
    lectures: 6,
    enrolled: '280000 students',
    language: 'English',
    deadline: 'Life Time',
    certificate: 'Yes',
    url: 'typescript-course',
    topics: ['Types', 'Interfaces', 'Classes', 'Generics'],
    syllabus: [
      'Getting Started with TypeScript',
      'Types and Variables',
      'Interfaces and Classes',
      'Generics and Modules',
      'TypeScript with Angular'
    ],
    skills: [
      'Add types to JavaScript',
      'Build scalable front-end apps',
      'Use TypeScript in real-world projects'
    ]
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
  isPaid: true,
  subtitle: 'Lightweight embedded SQL database.',
  description: 'Learn SQLite for local databases in desktop and mobile applications.',
  instructor: 'Sai Reddy',
  lectures: 7,
  enrolled: '190000 students',
  language: 'English',
  deadline: 'Life Time',
  certificate: 'Yes',
  url: 'sqlite-course',
  topics: ['SQL Commands', 'Database Creation', 'CRUD in SQLite'],
  syllabus: [
    'Introduction to SQLite',
    'Creating and Connecting to DB',
    'SQL CRUD Operations',
    'Joins and Queries',
    'Using SQLite in C#'
  ],
  skills: [
    'Use SQLite in apps',
    'Perform efficient queries',
    'Embed local DB in apps'
  ]
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
    isPaid: true,
    subtitle: 'Simplify JavaScript and DOM manipulation.',
    description: 'Master DOM traversal, event handling, and AJAX with jQuery.',
    instructor: 'Sai Reddy',
    lectures: 5,
    enrolled: '220000 students',
    language: 'English',
    deadline: 'Life Time',
    certificate: 'Yes',
    url: 'jquery-course',
    topics: ['Selectors', 'Events', 'Animations', 'AJAX'],
    syllabus: [
      'Intro to jQuery',
      'DOM Selection and Events',
      'jQuery Effects and Animations',
      'Form Validation',
      'AJAX Requests with jQuery'
    ],
    skills: [
      'Manipulate DOM easily',
      'Use jQuery animations',
      'Integrate AJAX calls'
    ]
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
    isPaid: true,
    subtitle: 'Asynchronous JavaScript and XML.',
    description: 'Use AJAX to fetch data asynchronously without reloading the web page.',
    instructor: 'Sai Reddy',
    lectures: 4,
    enrolled: '180000 students',
    language: 'English',
    deadline: 'Life Time',
    certificate: 'Yes',
    url: 'ajax-course',
    topics: ['XHR', 'Fetch API', 'JSON', 'jQuery AJAX'],
    syllabus: [
      'Intro to AJAX',
      'Working with XMLHttpRequest',
      'Using Fetch API',
      'AJAX with jQuery',
      'Working with JSON'
    ],
    skills: [
      'Send async HTTP requests',
      'Integrate AJAX in web apps',
      'Improve user experience with dynamic data'
    ]
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
  isPaid: true,
  subtitle: 'Build full-stack web apps using ASP.NET Core.',
  description: 'Learn to create MVC applications with Entity Framework and SQL Server.',
  instructor: 'Sai Reddy',
  lectures: 12,
  enrolled: '520000 students',
  language: 'English',
  deadline: 'Life Time',
  certificate: 'Yes',
  url: 'mvc-ef-sql-course',
  topics: ['MVC', 'EF Core', 'Razor Pages', 'SQL Server'],
  syllabus: [
    'ASP.NET Core MVC Fundamentals',
    'Model Binding and Validation',
    'Entity Framework Core Basics',
    'Data Access with EF and SQL Server',
    'Deploying ASP.NET Apps'
  ],
  skills: [
    'Build MVC web apps',
    'Use EF for DB operations',
    'Work with SQL Server backend'
  ]
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
  isPaid: true,
  subtitle: 'End-to-end app development using Angular and .NET.',
  description: 'Develop full-stack apps using Angular for frontend and Dapper for backend data access.',
  instructor: 'Sai Reddy',
  lectures: 14,
  enrolled: '600000 students',
  language: 'English',
  deadline: 'Life Time',
  certificate: 'Yes',
  url: 'angular-dapper-sql-course',
  topics: ['Angular', 'Dapper', 'API Integration', 'SQL Server'],
  syllabus: [
    'Angular Setup and Components',
    'Services and HTTP in Angular',
    'Dapper with ASP.NET Core',
    'SQL Server Integration',
    'Full App Deployment'
  ],
  skills: [
    'Develop front-end using Angular',
    'Create back-end APIs using Dapper',
    'Connect apps with SQL Server'
  ]
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
  isPaid: true,
  subtitle: 'Full-stack development with React and ADO.NET.',
  description: 'Build enterprise apps using React for frontend and ADO.NET for data access.',
  instructor: 'Sai Reddy',
  lectures: 11,
  enrolled: '480000 students',
  language: 'English',
  deadline: 'Life Time',
  certificate: 'Yes',
  url: 'react-adonet-sql-course',
  topics: ['React', 'ADO.NET', 'SQL Server', 'API Integration'],
  syllabus: [
    'React Basics and State Management',
    'Routing and Axios in React',
    'ADO.NET for SQL Server',
    'Building APIs with .NET',
    'Connecting React with Backend'
  ],
  skills: [
    'Use React to build UI',
    'Access data using ADO.NET',
    'Create connected full-stack apps'
  ]
}
];
testimonials = [
    {
      name: 'Anjali R.',
      image: '/img/testimonial-1.jpg',
      text: 'Joining SR Software Solutions helped me master .NET Full Stack Development. The practical sessions and real-world projects were a game-changer. I got placed as a software developer within 3 months!'
    },
    {
      name: 'Srinu T.',
      image: '/img/testimonial-2.jpg',
      text: 'The trainers at SR Software Solutions are amazing. The .NET Core and Angular combo course was extremely detailed, and the mock interviews boosted my confidence. Highly recommended!'
    },
    {
      name: 'Swetha M.',
      image: '/img/testimonial-4.jpg',
      text: 'I had zero coding background, but the structured training in C#, ADO.NET, and SQL Server gave me a solid foundation. I\'m now confidently building full-stack applications.'
    },
    {
      name: 'Saquib Mohammed.',
      image: '/img/testimonial-3.jpg',
      text: 'Excellent training and real-time use cases! I cracked multiple interviews after learning MVC, Entity Framework, and Dapper from SR Software Solutions. Thank you for the continuous support!'
    }
  ];
}
