# Title -  Photography portfolio
# Description -  Photography portfolio app

## Table of Contents

- [Live Demo](#live-demo)
- [Getting Started](#getting-started)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [High-level Design](#high-level-design)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

## Live Demo
Live application: [angular-authentication.netlify.app](https://angular-authentication.netlify.app/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Angular CLI](https://angular.io/cli)

### Setup & Usage

- Get the repository: `https://github.com/TodorCholakov/photography-portfolio.git`
- `cd photography-portfolio`
- Install dependencies: `npm install`
- Serve the Angular app: `ng serve`
- Open your browser at: `http://localhost:4200`

### Useful Commands

- `ng serve` - starts a dev server of Angular app
- `ng build --prod` - build a production version of the app
- `ng firebase init` - initialize the firebase project
- `ng firebase deploy` - deploy the angular app on the firebase servers

### Other Features

- Responsive design
- Error handling

## Tech Stack


- [Angular](https://angular.io/)
- [NgRX](https://ngrx.io/) - @ngrx/{store,effects,component}
- [Angular] - Injectable - Decorator that marks a class as available to be provided and injected as a dependency.
- [Angular] - HttpInterceptor - Intercepts and handles an HttpRequest or HttpResponse.
- [Angular] - HttpHandler - Transforms an HttpRequest into a stream of HttpEvents, one of which will likely be a HttpResponse.
- [Angular] - HttpParams - An HTTP request/response body that represents serialized parameters, per the MIME type application/x-www-form-urlencoded.
- [Angular] - take rxjs - Emits only the first count values emitted by the source Observable.
- [Angular] - exhaustMap rxjs - Projects each source value to an Observable which is merged in the output Observable only if the previous projected Observable has completed.
- [Angular] - Observable rxjs - Projects each source value to an Observable which is merged in the output Observable only if the previous projected Observable has completed.



## High-level Design

Below is the high-level structure of the application.


./src
├── app
│   ├── auth
│   │   ├── auth-interceptor.service.ts
│   │   ├── auth.component.css
│   │   ├── auth.component.html
|   │   ├── auth.component.ts
│   │   ├── auth.guard.ts
│   │   ├── user.model.ts
│   │
│   ├── components
│   │   │
│   │   ├── contact
│   │   │      ├── contact.component.css
│   │   │      ├── contact.component.html
│   │   │      ├── contact.component.ts
│   │   │
│   │   ├── gallery
│   │   │      ├── gallery.component.css
│   │   │      ├── gallery.component.html
│   │   │      ├── gallery.component.ts
│   │   │ 
│   │   ├── image
│   │   │      ├── image.component.css
│   │   │      ├── image.component.html
│   │   │      ├── image.component.ts
│   │   │
│   │   ├── messages
│   │         ├── messages.component.css
│   │         ├── messages.component.html
│   │         ├── messages.component.ts
│   │   
│   │───environments
│   │         ├── environment.ts
│   │   
│   │───header
│   │      ├── header.component.css
│   │      ├── header.component.html
│   │      ├── header.component.ts
│   │   
│   │───home-page
│   │      ├── home-page.component.css
│   │      ├── home-page.component.html
│   │      ├── home-page.component.ts
│   │   
│   ├── image
│   │   │
│   │   ├── add-image
│   │   │      ├── add-image.component.css
│   │   │      ├── add-image.component.html
│   │   │      ├── add-image.component.ts
│   │   │
│   │   ├── detailed-image
│   │   │      ├── detailed-image.component.css
│   │   │      ├── detailed-image.component.html
│   │   │      ├── detailed-image.component.ts
│   │   │ 
│   │   ├── edit-image
│   │         ├── edit-image.component.css
│   │         ├── edit-image.component.html
│   │  
│   │── models
│   │  ├── image.ts
│   │  ├── message.ts     
│   │ 
│   │── services
│   │  ├── contact.service.ts
│   │  ├── image.service.ts
│ 
│── app-routing.moudle.ts 
│── app.component.css
│── app.component.html
│── app.component.spec.ts
│── app.component.ts
│── app.module.ts

## License

Feel free to use this repository
