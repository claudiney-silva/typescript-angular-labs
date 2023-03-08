import { Component } from '@angular/core';
import { Course } from 'src/app/models/courses';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  
  courses: Course[] = [];

  selectedCourse?: Course;

  constructor(private coursesService: CoursesService) {
    this.getCourses();
  }

  showDescription(course: Course) {
    this.selectedCourse = course;
  }

  getCourses() {
    this.coursesService.findAll().subscribe(courses => this.courses = courses);
  }
}
