import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header">
      <div class="container header-container">
        <div class="logo">
          <a href="#">ModernSite</a>
        </div>
        <nav class="nav" [class.active]="isMenuOpen">
          <ul class="nav-list">
            <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
            <li><a routerLink="/about" routerLinkActive="active">About</a></li>
            <li><a routerLink="/services" routerLinkActive="active">Services</a></li>
            <li><a routerLink="/portfolio" routerLinkActive="active">Portfolio</a></li>
            <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
          </ul>
        </nav>
        <div class="menu-toggle" (click)="toggleMenu()">
          <div class="bar" [class.animate]="isMenuOpen"></div>
          <div class="bar" [class.animate]="isMenuOpen"></div>
          <div class="bar" [class.animate]="isMenuOpen"></div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background-color: white;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
    }
    
    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
    }
    
    .logo a {
      font-size: 1.8rem;
      font-weight: 700;
      color: #4f46e5;
      text-decoration: none;
    }
    
    .nav-list {
      display: flex;
      list-style: none;
    }
    
    .nav-list li {
      margin-left: 30px;
    }
    
    .nav-list a {
      color: #4b5563;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }
    
    .nav-list a:hover, .nav-list a.active {
      color: #4f46e5;
    }
    
    .menu-toggle {
      display: none;
      flex-direction: column;
      cursor: pointer;
    }
    
    .bar {
      width: 25px;
      height: 3px;
      background-color: #4b5563;
      margin: 3px 0;
      transition: 0.4s;
    }
    
    .bar.animate:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .bar.animate:nth-child(2) {
      opacity: 0;
    }
    
    .bar.animate:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }
    
    @media (max-width: 768px) {
      .menu-toggle {
        display: flex;
      }
      
      .nav {
        position: fixed;
        top: 80px;
        left: 0;
        right: 0;
        background-color: white;
        height: 0;
        overflow: hidden;
        transition: height 0.3s ease;
      }
      
      .nav.active {
        height: calc(100vh - 80px);
        border-top: 1px solid #e5e7eb;
      }
      
      .nav-list {
        flex-direction: column;
        padding: 20px;
      }
      
      .nav-list li {
        margin: 15px 0;
      }
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}