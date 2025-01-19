import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  public email: string = '';
  public password: string = '';
  public errorMessage: string = '';
  public isLogin: boolean = true;
  public repeatPassword = '';

  constructor(private authService: AuthService) {}

  public toggleLogin() {
    this.isLogin = !this.isLogin;
  }

  public getCurrentUser() {
    const user = this.authService.getCurrentUser();
    if (user) {
      console.log(user);
    }
  }

  public register() {
    if (this.password !== this.repeatPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }
    console.log(this.password, this.repeatPassword, this.email);
    this.authService
      .register(this.email, this.password)
      .then(() => {
        console.log('Register successful!');
      })
      .catch((error) => {
        this.errorMessage = error.message;
      });
  }

  public login() {
    console.log(this.password, this.repeatPassword, this.email);
    this.authService
      .login(this.email, this.password)
      .then(() => {
        console.log('Login successful!');
      })
      .catch((error) => {
        this.errorMessage = error.message;
      });
  }

  public forgotPassword(email: string) {
    console.log(email)
    return;
    this.authService
      .forgotPassword(this.email)
      .then(() => {
        console.log('Login successful!');
      })
      .catch((error) => {
        this.errorMessage = error.message;
      });
  }
}
