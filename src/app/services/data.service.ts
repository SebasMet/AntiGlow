import { Injectable } from '@angular/core';
import {
  Firestore,
  setDoc,
  addDoc,
  collection,
  getDocs,
  query,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
} from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { filter, from, map, Observable, switchMap } from 'rxjs';
import { EntireCourse } from '../quiz/models/course.models';

@Injectable({
  providedIn: 'root',
})
export class DataService {


  constructor(private firestore: Firestore, private authService: AuthService) {

  }

  public getCompletedCourses(): Observable<number[]> {
    return this.getUserUid().pipe(
      map((uid) => doc(this.firestore, 'users', uid)),
      switchMap((userDocRef) => {
        return from(getDoc(userDocRef)).pipe(
          switchMap(async (docSnap) => {
            if (docSnap.exists()) {
              const userData = docSnap.data();
              let completedCourses = userData['completed_courses'];

              if (!completedCourses) {
                completedCourses = []; 
                await updateDoc(userDocRef, { completed_courses: completedCourses });
                console.log("Created 'test' field for user:", docSnap.id);
              }

              return completedCourses;
            } else {
              console.error('No such document!');
              return [];
            }
          })
        );
      })
    );
  }

  public addCompletedCourse(courseId: number): Observable<void> {
    return this.getUserUid().pipe(
      map((uid) => doc(this.firestore, 'users', uid)),
      switchMap((userDocRef) => {
        return from(updateDoc(userDocRef, {
          completed_courses: arrayUnion(courseId)
        })).pipe(
          map(() => {
            console.log("Course added to completed_courses:", courseId);
          })
        );
      })
    );
  }

  public getAllCourses(): Observable<EntireCourse[]> {
    const coursesRef = collection(this.firestore, 'courses');
    return from(getDocs(query(coursesRef))).pipe(
      map(querySnapshot => {
        return querySnapshot.docs.map(doc => doc.data() as EntireCourse);
      })
    );
  }

  private getUserUid(): Observable<string> {
    return this.authService.authState().pipe(
      filter((user) => !!user), 
      map((user) => user!.uid)     );
  }
}
