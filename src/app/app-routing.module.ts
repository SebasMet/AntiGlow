import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './core/containers/landing-page/landing-page.component';
import { QuizPageComponent } from './quiz/containers/quiz-page/quiz-page.component';
import { CourseViewComponent } from './course-overview/containers/course-view/course-view.component';
import { LoginPageComponent } from './core/containers/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'course/:id', component: QuizPageComponent },
  { path: 'overview', component: CourseViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
