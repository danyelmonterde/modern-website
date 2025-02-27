import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="container hero-container">
        <div class="hero-content">
          <h1 class="hero-title">Beautiful Designs for the Modern Web</h1>
          <p class="hero-subtitle">We create stunning digital experiences that captivate your audience and drive results.</p>
          <div class="hero-buttons">
            <a href="#" class="btn">Get Started</a>
            <a href="#" class="btn btn-secondary">Learn More</a>
          </div>
        </div>
        <div class="hero-image">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" alt="Modern web design">
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: 160px 0 100px;
      background-color: #f8fafc;
      position: relative;
      overflow: hidden;
    }
    
    .hero-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    
    .hero-content {
      max-width: 700px;
      margin-bottom: 40px;
    }
    
    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 20px;
      line-height: 1.2;
    }
    
    .hero-subtitle {
      font-size: 1.25rem;
      color: #6b7280;
      margin-bottom: 30px;
    }
    
    .hero-buttons {
      display: flex;
      gap: 15px;
      justify-content: center;
    }
    
    .hero-image {
      width: 100%;
      max-width: 800px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    
    .hero-image img {
      width: 100%;
      height: auto;
      display: block;
    }
    
    @media (min-width: 1024px) {
      .hero-container {
        flex-direction: row;
        text-align: left;
        justify-content: space-between;
        gap: 40px;
      }
      
      .hero-content {
        margin-bottom: 0;
      }
      
      .hero-buttons {
        justify-content: flex-start;
      }
    }
    
    @media (max-width: 768px) {
      .hero {
        padding: 140px 0 80px;
      }
      
      .hero-title {
        font-size: 2.5rem;
      }
    }
  `]
})
export class HeroComponent {}