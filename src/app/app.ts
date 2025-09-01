import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [KeyValuePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('olumide');
  activeSection = signal<'hero' | 'about' | 'experience' | 'skills' | 'contact'>('hero');
  isMenuOpen = signal(false);
  isVisible = signal(false);

  ngOnInit() {
    setTimeout(() => this.isVisible.set(true), 100);
  }

  getRandom(): number {
    return Math.random();
  }

  scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      this.activeSection.set(sectionId as any);
      this.isMenuOpen.set(false);
    }
  }

  profileDetails = {
    details:"I am a software engineer with 5+ years of experience in programming in a fast-paced company, equipped with hands-on experience in building suitable and effective web-based JavaScript applications that use API data. AngularJS certified, with practical knowledge of the architectural concepts underlying Angular 5+ and developing web-based applications with Angular and Node. Having managed a three-member cross-functional team and being skilled in GIT, he has developed the ability to solve problems and collaborate with team members to achieve the organization's goals."
  }

  getYear() {
    return new Date().getFullYear()
  }

  experiences = [
    {
      company: "83COMPASS",
      role: "Backend Engineer",
      type: "Remote",
      period: "January 2023 – Present",
      highlights: [
        "Built 80% of backend endpoints for Smart Budget Application using Node.js",
        "Integrated Client and Attorney Budget management features",
        "Collaborated with cross-functional team of 6 developers",
        "Implemented MySQL, Redis caching, and AWS services integration",
        "Developed secure payment services integration"
      ],
      tech: ["Node.js", "TypeScript", "MySQL", "Redis", "AWS", "Express.js"]
    },
    {
      company: "Highstone University",
      role: "Fullstack Engineer",
      type: "Contract",
      period: "December 2024",
      highlights: [
        "Translated UI/UX designs into dynamic and reusable Angular components, improving user experience with responsive and interactive elements.",
        "Applied performance optimization techniques such as OnPush change detection, RxJS operators, and efficient state management, reducing load times and improving responsiveness.",
        "Followed Angular best practices by building modular, maintainable standalone components and leveraging built-in directives and dependency injection for scalable development.",
        "Integrated RESTful APIs with Angular’s HttpClient, ensuring seamless real-time synchronization of backend data with the frontend dashboard.",
        "Designed and implemented a Certificate Dashboard using Node.js (Express), enabling administrators to create, validate, and distribute digital certificates securely.",
        "Built role-based access control (RBAC) on both frontend (Angular route guards) and backend (Node.js middleware), ensuring tailored dashboard experiences and secure data access.",
        "Implemented server-side validation and JWT authentication in Node.js, safeguarding sensitive student and staff records.",
        "Established robust error boundaries and logging mechanisms in Angular and Node.js, simplifying debugging and improving reliability.",
        "Enforced strict ESLint + Prettier rules and conducted peer code reviews, ensuring code quality, maintainability, and consistency across the team.",
        "Regularly collaborated through Git workflows (feature branches, pull requests, conflict resolution), enabling smooth feature integration and effective teamwork."
      ],
      tech: ["Angular", "Node.js", "Express.js", "TypeScript", "MySQL", "Redis", "AWS"]
    },
    {
      company: "Getart",
      role: "Fullstack Engineer",
      type: "Contract",
      period: "July 2023 – December 2024",
      highlights: [
        "Designed user-centric fintech application for financial inclusivity",
        "Optimized performance with API-caching, achieving 30% improvement",
        "Enhanced security with 2FA mechanisms and data encryption",
        "Developed comprehensive analytics dashboards for KPI tracking",
        "Implemented user-specific permissions for secure transactions"
      ],
      tech: ["Angular", "Nestjs", "TypeScript", "HTML5", "CSS3", "SCSS", "RESTful APIs", "Git", "MySQL"]
    },
    {
      company: "SYSSERVE",
      role: "Frontend Engineer",
      type: "Remote",
      period: "March 2022 - December 2024",
      highlights: [
        "Led dashboard implementation for facility management system",
        "Designed dynamic components for real-time facility monitoring",
        "Maintained 80% of web application coding using Angular",
        "Developed fleet and facility dashboard with responsive components",
        "Implemented complex user role management and permissions"
      ],
      tech: ["Angular", "Ionic", "HTML5", "CSS3", "SCSS", "StencilJS"]
    }
  ];

  skills = {
    frontend: ["Angular", "HTML5", "CSS3", "JavaScript", "Bootstrap", "SCSS", "Ionic"],
    backend: ["Node.js", "Express.js", "TypeScript", "RESTful APIs", "NestJs"],
    databases: ["MySQL", "MongoDB", "Redis"],
    tools: ["Git", "AWS", "Slack", "Jira", "Figma", "Bitbucket"],
    other: ["OOP", "Design Patterns", "Team Leadership", "Project Management"]
  };

  certifications = [
    "Programming Foundations with JavaScript, HTML, and CSS - Coursera (2021)",
    "AngularJS Certification - Coursera (2020)",
    "Front-End Web UI Frameworks and Tools: Bootstrap 4 - Coursera (2020)",
    "Version Control with Git - Coursera (2020)"
  ];
  
}
