import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { EntireCourse } from '../../models/course.models';
import { DataService } from '../../../services/data.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrl: './quiz-page.component.css',
})
export class QuizPageComponent implements OnInit {
  public currentSection: number = 0;
  public currentQuestion: number = 0;
  public showQuiz = false;
  public courses: EntireCourse[] = [];
  public course: EntireCourse = {
    title: '',
    courseCoverImage: '',
    courseId: 0,
    lessons: [],  
    quiz: []     
  };

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router,) {
   
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        const courseIdString = params.get('id');
        const courseId = courseIdString ? +courseIdString : 0;  
        this.dataService.getAllCourses().pipe(
          map(courses => courses.find(course => course.courseId === courseId))
        ).subscribe(course => {
          if (course) {
            this.course = course;
          }
        });  
    });
  }

  public nextSection(): void {
    if(!this.course) return ;

    if (this.currentSection == this.course.lessons.length - 1) {
      this.showQuiz = true;
      return;
    }
  
    this.currentSection += 1;
  }

  public previousSection(): void {
    if (this.currentSection == 0) return;
    this.currentSection -= 1;
  }

  public onCorrectAnswer() { 
    if(this.currentQuestion != this.course.quiz.length - 1) {
      this.currentQuestion += 1;
    }
    else { 
      this.addCourseToCompletedCourses(this.course.courseId);
      this.router.navigate([`/overview`]);
    }
  }

  private addCourseToCompletedCourses(courseId: number) {
    this.dataService.addCompletedCourse(courseId).subscribe({
      next: () => {
        console.log('Course added successfully!');
      },
      error: (err) => {
        console.error('Error adding course:', err);
      }
    });
  }
}
