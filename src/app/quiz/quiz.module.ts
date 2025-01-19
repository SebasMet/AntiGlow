import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizPageComponent } from './containers/quiz-page/quiz-page.component';
import { DisplayLearningMaterialComponent } from './components/display-learning-material/display-learning-material.component';
import {MatIconModule} from '@angular/material/icon';
import { DisplayQuizComponent } from './components/display-quiz/display-quiz.component';


@NgModule({
  declarations: [
    QuizPageComponent,
    DisplayLearningMaterialComponent,
    DisplayQuizComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class QuizModule { }
