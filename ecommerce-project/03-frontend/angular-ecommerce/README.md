# E-Commerce Angular + Spring Boot

## Project Description
An e-commerce application using Angular (frontend) and Spring Boot (backend). The project enables users to browse products, manage their cart, and complete orders.

## Features
- Product listing with category-based browsing
- Product details page
- Product search functionality
- Shopping cart management
- Checkout and order placement
- User authentication and registration
- Member-only access pages

## Technologies

### Frontend
- Angular
- TypeScript
- Bootstrap (ng-bootstrap)
- Angular Reactive Forms

### Backend
- Spring Boot
- Spring REST API
- Java
- Maven

## Installation and Setup

### Prerequisites
- Node.js and npm
- Angular CLI
- Java JDK 21+
- Maven

This setup ensures a fully functional Angular and Spring Boot-based e-commerce application.

## Installing Frontend Dependencies

Use the following commands to install all required frontend libraries:

```bash
# Angular CLI (specific version, global install)
npm install --location=global @angular/cli@19.2.1

# Bootstrap 5
npm install bootstrap@5.3.3

# FontAwesome
npm install @fortawesome/fontawesome-free

# ng-bootstrap (Bootstrap components for Angular)
npm install @ng-bootstrap/ng-bootstrap@18.0.0

# Okta Sign-In Widget
npm install @okta/okta-signin-widget@7.30.1

# Okta Angular SDK
npm install @okta/okta-angular@6.5.1

# Okta Auth JS SDK
npm install @okta/okta-auth-js@7.11.3

# Angular Localization Support
ng add @angular/localize
```

## Creating a New Angular Project

### Creating a New Angular Project (Without Standalone Mode)
```
ng new --no-standalone project-name
```

### Navigating to the Project Directory
```
cd project-name
```

## Running Angular Development Server

### Running the Angular Development Server (Accessible on localhost:4200)
```
ng serve
```

### Running Angular with Auto-Opening in Browser
```
ng serve --open
```

## Generating Components, Classes, and Interfaces in Angular

### Generating a New Component
```
ng generate component component-name
```

### Generating a New Class in a Specific Directory
```
ng generate class directory/class-name
```

### Generating a New Interface in a Specific Directory
```
ng generate interface directory/interface-name
```

---

This e-commerce project was initially developed as part of a course on building full-stack applications with Angular and Spring Boot. It has been further extended and customized by me to deepen my understanding of full-stack web development.

