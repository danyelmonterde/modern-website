import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section about">
      <div class="container">
        <h2 class="section-title">About Us</h2>
        <p class="section-subtitle">We're a team of passionate designers and developers creating exceptional digital experiences.</p>
        
        <div class="about-content">
          <div class="about-image">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Our team">
          </div>
          
          <div class="about-text">
            <h3>Our Story</h3>
            <p>Founded in 2020, ModernSite began with a simple mission: to help businesses succeed in the digital world through beautiful design and powerful technology.</p>
            <p>What started as a small team of three has grown into a diverse group of talented professionals united by a passion for creating digital experiences that make a difference.</p>
            
            <h3>Our Approach</h3>
            <p>We believe that great design is about more than just aesthetics—it's about solving problems and creating meaningful connections between brands and their audiences.</p>
            <p>Our collaborative process ensures that every project we undertake is tailored to meet the unique needs and goals of our clients, resulting in solutions that are both beautiful and effective.</p>
            
            <div class="about-stats">
              <div class="stat-item">
                <span class="stat-number">150+</span>
                <span class="stat-label">Projects Completed</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">50+</span>
                <span class="stat-label">Happy Clients</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">10+</span>
                <span class="stat-label">Team Members</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">5+</span>
                <span class="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="team-section">
          <h3 class="team-title">Meet Our Team</h3>
          <p class="team-subtitle">The talented people behind our success</p>
          
          <div class="team-grid">
            <div class="team-member card">
              <div class="team-member-image">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team member">
              </div>
              <div class="team-member-info">
                <h4>David Miller</h4>
                <p class="team-member-position">Founder & CEO</p>
                <p class="team-member-bio">With over 15 years of experience in web development and design, David leads our team with vision and expertise.</p>
                <div class="team-member-social">
                  <a href="#" class="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="#" class="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div class="team-member card">
              <div class="team-member-image">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team member">
              </div>
              <div class="team-member-info">
                <h4>Sophia Chen</h4>
                <p class="team-member-position">Lead Designer</p>
                <p class="team-member-bio">Sophia brings creativity and innovation to every project, with a keen eye for detail and user-centered design principles.</p>
                <div class="team-member-social">
                  <a href="#" class="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="#" class="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div class="team-member card">
              <div class="team-member-image">
                <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Team member">
              </div>
              <div class="team-member-info">
                <h4>Marcus Johnson</h4>
                <p class="team-member-position">Lead Developer</p>
                <p class="team-member-bio">Marcus is our technical expert, with deep knowledge of modern web technologies and a passion for clean, efficient code.</p>
                <div class="team-member-social">
                  <a href="#" class="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a href="#" class="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div class="team-member card">
              <div class="team-member-image">
                <img src="https://randomuser.me/api/portraits/women/63.jpg" alt="Team member">
              </div>
              <div class="team-member-info">
                <h4>Olivia Martinez</h4>
                <p class="team-member-position">Marketing Specialist</p>
                <p class="team-member-bio">Olivia helps our clients grow their digital presence with strategic marketing solutions and data-driven insights.</p>
                <div class="team-member-social">
                  <a href="#" class="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="#" class="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      background-color: white;
    }
    
    .about-content {
      display: grid;
      grid-template-columns: 1fr;
      gap: 40px;
      margin-bottom: 80px;
    }
    
    @media (min-width: 768px) {
      .about-content {
        grid-template-columns: 1fr 1fr;
      }
    }
    
    .about-image {
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    
    .about-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    
    .about-text h3 {
      font-size: 1.8rem;
      margin-bottom: 20px;
      color: #1f2937;
    }
    
    .about-text p {
      margin-bottom: 25px;
      color: #6b7280;
      line-height: 1.7;
    }
    
    .about-stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
      margin-top: 40px;
    }
    
    @media (min-width: 768px) {
      .about-stats {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    
    .stat-item {
      text-align: center;
    }
    
    .stat-number {
      display: block;
      font-size: 2.5rem;
      font-weight: 700;
      color: #4f46e5;
      margin-bottom: 10px;
    }
    
    .stat-label {
      color: #6b7280;
      font-size: 0.9rem;
    }
    
    .team-section {
      margin-top: 80px;
    }
    
    .team-title {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 15px;
      color: #1f2937;
    }
    
    .team-subtitle {
      text-align: center;
      color: #6b7280;
      margin-bottom: 50px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .team-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 30px;
    }
    
    @media (min-width: 768px) {
      .team-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (min-width: 1024px) {
      .team-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    
    .team-member {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .team-member-image {
      height: 250px;
      overflow: hidden;
    }
    
    .team-member-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    .team-member:hover .team-member-image img {
      transform: scale(1.05);
    }
    
    .team-member-info {
      padding: 25px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
    
    .team-member-info h4 {
      font-size: 1.3rem;
      margin-bottom: 5px;
      color: #1f2937;
    }
    
    .team-member-position {
      color: #4f46e5;
      font-weight: 500;
      margin-bottom: 15px;
    }
    
    .team-member-bio {
      color: #6b7280;
      margin-bottom: 20px;
      flex-grow: 1;
    }
    
    .team-member-social {
      display: flex;
      gap: 10px;
    }
    
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      background-color: #eef2ff;
      border-radius: 50%;
      color: #4f46e5;
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    
    .social-link:hover {
      background-color: #4f46e5;
      color: white;
    }
  `]
})
export class AboutComponent {}