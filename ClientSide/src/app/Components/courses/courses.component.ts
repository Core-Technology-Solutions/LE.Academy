import { Component , OnInit} from '@angular/core';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses:any=[]
  errMessage:any;
  constructor (private courseService: CoursesService) {

  }

  ngOnInit():void {
    this.courseService.getCourses().subscribe({
      next: data=> this.courses = data,
      error: error=> this.errMessage = error
    })

  }
}
