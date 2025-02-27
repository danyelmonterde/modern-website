import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section features">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <p class="section-subtitle">We offer a wide range of digital services to help your business grow and succeed in the digital landscape.</p>
        
        <div class="grid grid-cols-3">
          <div class="feature-card card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            <h3>Web Design</h3>
            <p>Beautiful, responsive websites that look great on any device and help you stand out from the competition.</p>
          </div>
          
          <div class="feature-card card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </div>
            <h3>Web Development</h3>
            <p>Custom web applications and solutions built with the latest technologies to meet your specific business needs.</p>
          </div>
          
          <div class="feature-card card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            </div>
            <h3>Mobile Apps</h3>
            <p>Native and cross-platform mobile applications that provide seamless experiences across all devices.</p>
          </div>
          
          <div class="feature-card card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            </div>
            <h3>UI/UX Design</h3>
            <p>User-centered design that focuses on creating intuitive, engaging, and accessible digital experiences.</p>
          </div>
          
          <div class="feature-card card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            </div>
            <h3>Branding</h3>
            <p>Comprehensive branding services that help you establish a strong and consistent identity across all platforms.</p>
          </div>
          
          <div class="feature-card card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <h3>Digital Marketing</h3>
            <p>Strategic marketing solutions that drive traffic, generate leads, and increase conversions for your business.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .features {
      background-color: #f8f9fa;
    }
    
    .feature-card {
      padding: 30px;
      text-align: center;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .feature-icon {
      width: 70px;
      height: 70px;
      background-color: #eef2ff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      color: #4f46e5;
    }
    
    .feature-card h3 {
      font-size: 1.5rem;
      margin-bottom: 15px;
      color: #1f2937;
    }
    
    .feature-card p {
      color: #6b7280;
      margin-bottom: 0;
    }
    
    @media (max-width: 767px) {
      .grid {
        grid-template-columns: 1fr;
      }
      
      .feature-card {
        margin-bottom: 20px;
      }
    }
  `]
})
export class FeaturesComponent {}