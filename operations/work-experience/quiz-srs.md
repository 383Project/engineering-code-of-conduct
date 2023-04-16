# Software Requirements Specification: Online Quiz Project

## Introduction
The Online Quiz Project is a web-based application designed to allow users to take a short quiz and receive their score at the end. The application will consist of a frontend web page and a backend API.

## Functional Requirements
The final product we create will have a minimum functionality of:
- Admin authentication
- Quiz will be fixed at 3 questions with a multiple choice of 3 answers.
- In the admin you can change the text of the questions and the multiple choice answers and select which is the correct multiple choice answer.
- The API is a single endpoint and provides all 3 questions with their multiple choice options. The API will also detail the correct multiple choice answer.
- The frontend javascript will be responsible for calculating the final score of the correct answers.
- Only one question will appear at a time on the page, once a multiple choice answer is clicked on the next question will load onto the page.

## Non-Functional Requirements
### Performance Requirements
- The application should load quickly and have a fast response time.
- The API should be able to handle multiple simultaneous requests without crashing or slowing down.

### Security Requirements
- Admin authentication should be secure and protected from unauthorized access.
- User information and quiz results should be stored securely and not be accessible to unauthorized users.

### Usability Requirements
- The application should have an intuitive user interface that is easy to use and navigate.
- The quiz questions and multiple choice answers should be clear and easy to understand.

## Technical Requirements
### Frontend Technology
- React, React Native, Javascript, CSS, HTML
- Frameworks such as Expo for mobile and Next.js

### Backend Technology
- PHP and Node.js
- Laravel and its echo system

### API
- A single endpoint that provides all 3 quiz questions with their multiple choice options and the correct answer.

## Assumptions and Dependencies
- The user has a web browser and internet connection to access the application.
- The user's web browser supports HTML, CSS, and Javascript.
- The backend API is connected to a database for storing quiz questions and admin credentials.
- The application is hosted on a web server with sufficient resources to handle multiple simultaneous requests.

## Conclusion
The Online Quiz Project is designed to be a simple yet functional web-based application that allows users to take a short quiz and receive their score at the end. The application consists of a frontend web page and a backend API that are connected through a single endpoint. The project will be built using a combination of React, React Native, Javascript, CSS, HTML, PHP, and Node.js, with Laravel and its echo system serving as the backend framework. With its intuitive user interface and fast response time, the Online Quiz Project will provide an engaging and enjoyable quiz-taking experience for users.
