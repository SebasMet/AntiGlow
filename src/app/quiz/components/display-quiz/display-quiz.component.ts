import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuizOption } from '../../models/course.models';
@Component({
  selector: 'app-display-quiz',
  templateUrl: './display-quiz.component.html',
  styleUrl: './display-quiz.component.css'
})
export class DisplayQuizComponent {
    @Input() question: string ='';
    @Input() options: Array<QuizOption> = [];

    @Output() correctAnswerEvent = new EventEmitter<void>();     

    public checkAnswer(option: QuizOption) {
      if(option.correctAnswer) {
        this.correctAnswerEvent.emit()
      }
    }
    

}
