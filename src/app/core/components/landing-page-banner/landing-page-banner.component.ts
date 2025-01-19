import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page-banner',
  templateUrl: './landing-page-banner.component.html',
  styleUrl: './landing-page-banner.component.css'
})
export class LandingPageBannerComponent {
  constructor(private router: Router) { }

  public navigateToOverview() {
    this.router.navigate([`/overview`])
  }

}
