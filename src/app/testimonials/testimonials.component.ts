import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section testimonials">
      <div class="container">
        <h2 class="section-title">What Our Clients Say</h2>
        <p class="section-subtitle">Don't just take our word for it. Here's what our clients have to say about working with us.</p>
        
        <div class="testimonials-grid">
          <div *ngFor="let testimonial of testimonials" class="testimonial-card card">
            <div class="testimonial-rating">
              <span *ngFor="let star of [1, 2, 3, 4, 5]" class="star">★</span>
            </div>
            <p class="testimonial-text">"{{ testimonial.text }}"</p>
            <div class="testimonial-author">
              <div class="testimonial-author-image">
                <img [src]="testimonial.image" [alt]="testimonial.name">
              </div>
              <div class="testimonial-author-info">
                <h4>{{ testimonial.name }}</h4>
                <p>{{ testimonial.position }}, {{ testimonial.company }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials {
      background-color: #f8f9fa;
    }
    
    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 30px;
    }
    
    @media (min-width: 768px) {
      .testimonials-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (min-width: 1024px) {
      .testimonials-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    .testimonial-card {
      padding: 30px;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .testimonial-rating {
      margin-bottom: 20px;
    }
    
    .star {
      color: #f59e0b;
      font-size: 1.2rem;
      margin-right: 2px;
    }
    
    .testimonial-text {
      font-size: 1.1rem;
      line-height: 1.7;
      color: #4b5563;
      margin-bottom: 25px;
      flex-grow: 1;
    }
    
    .testimonial-author {
      display: flex;
      align-items: center;
    }
    
    .testimonial-author-image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 15px;
    }
    
    .testimonial-author-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .testimonial-author-info h4 {
      font-size: 1.1rem;
      margin-bottom: 5px;
      color: #1f2937;
    }
    
    .testimonial-author-info p {
      font-size: 0.9rem;
      color: #6b7280;
    }
  `]
})
export class TestimonialsComponent {
  testimonials = [
    {
      text: "Working with ModernSite was a game-changer for our business. They delivered a stunning website that perfectly captures our brand and has significantly increased our online conversions.",
      name: "Sarah Johnson",
      position: "CEO",
      company: "Elevate Fitness",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      text: "The team at ModernSite went above and beyond our expectations. Their attention to detail and commitment to quality is unmatched. We couldn't be happier with the results.",
      name: "Michael Chen",
      position: "Marketing Director",
      company: "TechInnovate",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      text: "From concept to completion, ModernSite guided us through the entire process with professionalism and expertise. Our new website has received countless compliments from our customers.",
      name: "Emily Rodriguez",
      position: "Founder",
      company: "Bloom Boutique",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];
}