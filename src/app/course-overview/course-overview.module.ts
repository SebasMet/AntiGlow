import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseViewComponent } from './containers/course-view/course-view.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CourseListItemComponent } from './components/course-list-item/course-list-item.component';


@NgModule({
  declarations: [
    CourseViewComponent,
    CourseListItemComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatIconModule
  ],

})
export class CourseOverviewModule { }
