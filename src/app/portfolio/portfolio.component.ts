import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section portfolio">
      <div class="container">
        <h2 class="section-title">Our Work</h2>
        <p class="section-subtitle">Check out some of our recent projects and see how we've helped our clients achieve their goals.</p>
        
        <div class="portfolio-filter">
          <button 
            *ngFor="let filter of filters" 
            [class.active]="activeFilter === filter"
            (click)="setFilter(filter)"
          >
            {{ filter }}
          </button>
        </div>
        
        <div class="grid grid-cols-3 portfolio-grid">
          <div 
            *ngFor="let project of filteredProjects" 
            class="portfolio-item card"
          >
            <div class="portfolio-image">
              <img [src]="project.image" [alt]="project.title">
            </div>
            <div class="portfolio-content">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <span class="portfolio-category">{{ project.category }}</span>
            </div>
          </div>
        </div>
        
        <div class="portfolio-more">
          <a href="#" class="btn">View All Projects</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .portfolio {
      background-color: white;
    }
    
    .portfolio-filter {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 40px;
      gap: 10px;
    }
    
    .portfolio-filter button {
      padding: 8px 20px;
      background-color: transparent;
      border: none;
      border-radius: 30px;
      cursor: pointer;
      font-weight: 500;
      color: #6b7280;
      transition: all 0.3s ease;
    }
    
    .portfolio-filter button.active {
      background-color: #4f46e5;
      color: white;
    }
    
    .portfolio-filter button:hover:not(.active) {
      color: #4f46e5;
    }
    
    .portfolio-grid {
      margin-bottom: 40px;
    }
    
    .portfolio-item {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .portfolio-image {
      height: 240px;
      overflow: hidden;
    }
    
    .portfolio-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    .portfolio-item:hover .portfolio-image img {
      transform: scale(1.05);
    }
    
    .portfolio-content {
      padding: 25px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
    
    .portfolio-content h3 {
      font-size: 1.3rem;
      margin-bottom: 10px;
      color: #1f2937;
    }
    
    .portfolio-content p {
      color: #6b7280;
      margin-bottom: 15px;
      flex-grow: 1;
    }
    
    .portfolio-category {
      display: inline-block;
      padding: 5px 12px;
      background-color: #eef2ff;
      color: #4f46e5;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 500;
    }
    
    .portfolio-more {
      text-align: center;
      margin-top: 20px;
    }
    
    @media (max-width: 767px) {
      .portfolio-filter {
        margin-bottom: 30px;
      }
      
      .portfolio-item {
        margin-bottom: 20px;
      }
    }
  `]
})
export class PortfolioComponent {
  filters: string[] = ['All', 'Web Design', 'Web Development', 'Mobile Apps', 'Branding'];
  activeFilter: string = 'All';
  
  projects = [
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform with advanced filtering and payment integration.',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'
    },
    {
      title: 'Financial App',
      description: 'Mobile application for personal finance management and investment tracking.',
      category: 'Mobile Apps',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'Restaurant Website',
      description: 'Elegant website design for a high-end restaurant with online reservation system.',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    },
    {
      title: 'Fitness Brand Identity',
      description: 'Complete brand identity design for a fitness company including logo and guidelines.',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'Travel Blog',
      description: 'Custom blog design and development for a travel influencer with content management.',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1421&q=80'
    },
    {
      title: 'Health Tracking App',
      description: 'Mobile application for tracking health metrics, exercise, and nutrition.',
      category: 'Mobile Apps',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];
  
  get filteredProjects() {
    if (this.activeFilter === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeFilter);
  }
  
  setFilter(filter: string) {
    this.activeFilter = filter;
  }
}