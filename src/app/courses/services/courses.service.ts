import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  private readonly API = '/assets/courses.json';

  list() {
    return this.httpClient.get<Course[]>(this.API);
  }
}
