import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrl: './course-list-item.component.css'
})
export class CourseListItemComponent {
  @Input() courseTitle: string = "";
  @Input() courseId: number = 1;
  @Input() coverImage: string = '';
  @Input() icon: string = 'check_box_outline_blank'

  constructor(private router: Router) {
    
  }

  public navigateToCourse(courseId: number) {
    this.router.navigate([`/course/${courseId}`])
  }

}
