import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, catchError, throwError} from 'rxjs';
import {ICourse} from '../Interfaces/ICourse'


@Injectable({
  providedIn: 'root'
  // root injectable means you can use this service on all project
})
export class CoursesService {

  _url= "http://localhost:8080/LEAcademy/courses";
  constructor( private http:HttpClient) { }

  getCourses():Observable<ICourse[]> {
    return this.http.get<ICourse[]>(this._url).pipe(catchError((err) => {
      return throwError(() => err.message || "Server error")
    }));
  }
}
