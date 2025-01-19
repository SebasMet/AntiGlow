import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'firebase/auth';
import { EntireCourse } from '../../../quiz/models/course.models';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrl: './course-view.component.css',
})
export class CourseViewComponent {
  public courses: EntireCourse[] = [];
  public user: User | null = null;
  public completedCourses: number[] = [];
  private destroy$ = new Subject<void>();

  constructor(private dataService: DataService) {
    this.dataService.getCompletedCourses().subscribe({
      next: (courses) => {
        console.log(courses);
        this.completedCourses = courses;
      },
      error: (err) => {
        console.error('Error fetching completed courses:', err);
      },
    });


    this.dataService.getAllCourses().subscribe({ 
      next: (courses) => {
        this.courses = courses;
      },
      error: (err) => {
        console.error('Error fetching courses:', err);
      },
    });
  }

  public isCourseCompleted(courseId: number): boolean {
    return this.completedCourses.includes(courseId);
   }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
