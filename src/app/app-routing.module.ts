import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { LandingPageComponent } from './core/containers/landing-page/landing-page.component';
import { QuizPageComponent } from './quiz/containers/quiz-page/quiz-page.component';
import { CourseViewComponent } from './course-overview/containers/course-view/course-view.component';
import { LoginPageComponent } from './core/containers/login-page/login-page.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']); 


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'course/:id', component: QuizPageComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'overview', component: CourseViewComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
