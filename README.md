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

# Okta Login Configuration

1. Create an account on Okta: https://developer.okta.com/signup
2. Log in to the Okta Admin Console
3. Go to Applications > Create App Integration
   - Type: OIDC - OpenID Connect
   - Application: Single Page Application
   - Redirect URI: http://localhost:4200/login/callback
   - Logout URI: http://localhost:4200
   - Grant types: Authorization Code + PKCE
4. Save the Client ID and Issuer URL
5. Add a user under Directory > People > Add Person
   - First Name: Bartek
   - Last Name: Testowy
   - Email/Username: BarTest@mail.com
   - Password: testUser@123 (set by admin)
6. In your Angular project, install dependencies: okta-auth-js and okta-angular
7. Add your Okta credentials (Client ID, Issuer, Redirect URI) to the app configuration
8. Add routes for /login and /login/callback
9. Add a login and loginStatus component
10. Run the app and test login with the user BarTest@mail.com

**Login credentials:**
- **Username:** BarTest@mail.com
- **Password:** testUser@123

This e-commerce project was initially developed as part of a course on building full-stack applications with Angular and Spring Boot. It has been further extended and customized by me to deepen my understanding of full-stack web development.

Link:  https://www.udemy.com/course/full-stack-angular-spring-boot-tutorial/

