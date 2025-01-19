import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { User } from 'firebase/auth';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Anti-Glow';
  public user: User | null = null;
  private destroy$ = new Subject<void>(); // Used to signal when to unsubscribe

  constructor(
    private router: Router,
    private authService: AuthService,
    private dataService: DataService
  ) {
    this.authService
      .authState()
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => {
        this.user = user;
      });
  }

  public printUser() {
    const user = this.authService.getCurrentUser();

    console.log('User', user);
    console.log('THIS User', this.user);
  }

  public logout() {
    this.authService.logout().then(() => {
      this.user = null;
    });
  }

  public navigateToOverview() {
    this.router.navigate([`/overview`]);
  }

  public navigateToLogin() {
    this.router.navigate([`/login`]);
  }

  public navigateToHome() {
    this.router.navigate([`/`]);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
