import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>ModernSite</h3>
            <p>Creating beautiful digital experiences that inspire and engage.</p>
            <div class="social-icons">
              <a href="#" class="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" class="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" class="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="#" class="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul class="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Services</h4>
            <ul class="footer-links">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile Apps</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Digital Marketing</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Contact Us</h4>
            <p>123 Design Street<br>Creative City, CO 12345</p>
            <p>Email: info&#64;modernsite.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 ModernSite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: #1f2937;
      color: #f3f4f6;
      padding: 70px 0 20px;
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 40px;
      margin-bottom: 40px;
    }
    
    @media (min-width: 768px) {
      .footer-content {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    
    .footer-section h3 {
      color: #fff;
      font-size: 1.5rem;
      margin-bottom: 20px;
    }
    
    .footer-section h4 {
      color: #fff;
      font-size: 1.2rem;
      margin-bottom: 20px;
    }
    
    .footer-section p {
      margin-bottom: 15px;
      color: #d1d5db;
    }
    
    .social-icons {
      display: flex;
      gap: 15px;
      margin-top: 20px;
    }
    
    .social-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      color: #fff;
      transition: background-color 0.3s ease;
    }
    
    .social-icon:hover {
      background-color: #4f46e5;
    }
    
    .footer-links {
      list-style: none;
    }
    
    .footer-links li {
      margin-bottom: 10px;
    }
    
    .footer-links a {
      color: #d1d5db;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    
    .footer-links a:hover {
      color: #4f46e5;
    }
    
    .footer-bottom {
      text-align: center;
      padding-top: 20px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      color: #9ca3af;
    }
  `]
})
export class FooterComponent {}