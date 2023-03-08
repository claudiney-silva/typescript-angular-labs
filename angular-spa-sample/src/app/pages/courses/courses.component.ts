import { Component } from '@angular/core';
import { Course } from 'src/app/models/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  courses: Course[] = [
    {id: 1, name: 'Angular', description: 'Angular course etc'},
    {id: 2, name: 'React', description: 'React course etc'},
    {id: 3, name: 'Vue', description: 'Vue course etc'}
  ];

  selectedCourse?: Course;

  showDescription(course: Course) {
    this.selectedCourse = course;
  }
}
