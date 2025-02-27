import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { FeaturesComponent } from '../features/features.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, FeaturesComponent, PortfolioComponent, TestimonialsComponent],
  template: `
    <app-hero></app-hero>
    <app-features></app-features>
    <app-portfolio></app-portfolio>
    <app-testimonials></app-testimonials>
  `
})
export class HomeComponent {}