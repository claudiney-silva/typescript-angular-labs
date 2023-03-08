import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/courses';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent {
  course?: Course;

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) {
    this.getCourse();
  }

  getCourse() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.coursesService.findById(id).subscribe(course => this.course = course);
  }
}
