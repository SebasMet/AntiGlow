import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail, User, getAuth, onAuthStateChanged, authState } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly user$: Observable<User | null>;

  
  constructor(private auth: Auth, private router: Router) {
    this.user$ = authState(auth);
  }

  // Login with email and password
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        console.log('Login successful!', userCredential.user);
        this.router.navigate(['/overview']); // Redirect after login
      })
      .catch((error) => {
        console.error('Error during login:', error.message);
        throw error;
      });
  }

  public authState(): Observable<User | null> {
    return this.user$;
}

  // Register a new user
  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        console.log('Registration successful!', userCredential.user);
        this.router.navigate(['/overview']);
      })
      .catch((error) => {
        console.error('Error during registration:', error.message);
        throw error;
      });
  }

  // Logout the user
  logout() {
    return signOut(this.auth)
      .then(() => {
        console.log('Logout successful!');
        this.router.navigate(['/login']); // Redirect to login page
      })
      .catch((error) => {
        console.error('Error during logout:', error.message);
        throw error;
      });
  }

  forgotPassword(email: string) {
    return sendPasswordResetEmail(this.auth,  email)
      .then(() => {
        console.log('Mail sent');      })
      .catch((error) => {
        console.error('Error during passsword reset:', error.message);
        throw error;
      });
  }

  // Check if user is logged in
  getCurrentUser() {
    return this.auth.currentUser;
  }
}