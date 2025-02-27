import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="section contact">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">Have a project in mind? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
        
        <div class="contact-container">
          <div class="contact-info">
            <div class="contact-info-item">
              <div class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <h4>Phone</h4>
                <p>(123) 456-7890</p>
              </div>
            </div>
            
            <div class="contact-info-item">
              <div class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <h4>Email</h4>
                <p>info&#64;modernsite.com</p> 
              </div>
            </div>
            
            <div class="contact-info-item">
              <div class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <h4>Location</h4>
                <p>123 Design Street<br>Creative City, CO 12345</p>
              </div>
            </div>
            
            <div class="contact-social">
              <h4>Follow Us</h4>
              <div class="social-icons">
                <a href="#" class="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" class="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" class="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
                <a href="#" class="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div class="contact-form card">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" formControlName="name" class="form-control" placeholder="Your name">
                <div *ngIf="name.invalid && (name.dirty || name.touched)" class="error-message">
                  <div *ngIf="name.errors?.['required']">Name is required.</div>
                </div>
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" formControlName="email" class="form-control" placeholder="Your email">
                <div *ngIf="email.invalid && (email.dirty || email.touched)" class="error-message">
                  <div *ngIf="email.errors?.['required']">Email is required.</div>
                  <div *ngIf="email.errors?.['email']">Please enter a valid email.</div>
                </div>
              </div>
              
              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" formControlName="subject" class="form-control" placeholder="Subject">
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" formControlName="message" class="form-control" rows="5" placeholder="Your message"></textarea>
                <div *ngIf="message.invalid && (message.dirty || message.touched)" class="error-message">
                  <div *ngIf="message.errors?.['required']">Message is required.</div>
                </div>
              </div>
              
              <button type="submit" class="btn btn-block" [disabled]="contactForm.invalid">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      background-color: white;
    }
    
    .contact-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 40px;
    }
    
    @media (min-width: 768px) {
      .contact-container {
        grid-template-columns: 1fr 2fr;
      }
    }
    
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
    
    .contact-info-item {
      display: flex;
      align-items: flex-start;
      gap: 15px;
    }
    
    .contact-icon {
      width: 50px;
      height: 50px;
      background-color: #eef2ff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #4f46e5;
      flex-shrink: 0;
    }
    
    .contact-info-item h4 {
      font-size: 1.2rem;
      margin-bottom: 5px;
      color: #1f2937;
    }
    
    .contact-info-item p {
      color: #6b7280;
    }
    
    .contact-social {
      margin-top: 20px;
    }
    
    .contact-social h4 {
      font-size: 1.2rem;
      margin-bottom: 15px;
      color: #1f2937;
    }
    
    .social-icons {
      display: flex;
      gap: 15px;
    }
    
    .social-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: #eef2ff;
      border-radius: 50%;
      color: #4f46e5;
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    
    .social-icon:hover {
      background-color: #4f46e5;
      color: white;
    }
    
    .contact-form {
      padding: 30px;
    }
    
    .form-group {
      margin-bottom: 20px;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: #1f2937;
    }
    
    .form-control {
      width: 100%;
      padding: 12px 15px;
      border: 1px solid #e5e7eb;
      border-radius: 5px;
      font-family: inherit;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }
    
    .form-control:focus {
      outline: none;
      border-color: #4f46e5;
    }
    
    textarea.form-control {
      resize: vertical;
    }
    
    .btn-block {
      width: 100%;
      padding: 12px;
    }
    
    .error-message {
      color: #ef4444;
      font-size: 0.875rem;
      margin-top: 5px;
    }
  `]
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl(''),
    message: new FormControl('', [Validators.required])
  });
  
  get name() { return this.contactForm.get('name')!; }
  get email() { return this.contactForm.get('email')!; }
  get subject() { return this.contactForm.get('subject')!; }
  get message() { return this.contactForm.get('message')!; }
  
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Here you would typically send the form data to your backend
      alert('Thank you for your message! We will get back to you soon.');
      this.contactForm.reset();
    }
  }
}