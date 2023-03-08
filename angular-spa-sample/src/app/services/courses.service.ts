import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Course } from '../models/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

  findById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }
}
