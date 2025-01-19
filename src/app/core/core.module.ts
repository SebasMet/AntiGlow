import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageComponent } from './containers/landing-page/landing-page.component';
import { LandingPageHeaderComponent } from './components/landing-page-header/landing-page-header.component';
import { LandingPageBannerComponent } from './components/landing-page-banner/landing-page-banner.component';
import { LandingPageTestimonialsComponent } from './components/landing-page-testimonials/landing-page-testimonials.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LandingPageComponent,
    LandingPageHeaderComponent,
    LandingPageBannerComponent,
    LandingPageTestimonialsComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports: [
    LandingPageComponent,

  ]
})
export class CoreModule { }
