import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  private readonly API = '/assets/courses.json';

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      delay(5000000),
      tap((course) => console.log(course))
    );
  }
}
