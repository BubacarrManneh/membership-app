# Membership Registration App

## Description

The Membership Registration app is a web application built using React.js that allows users to register for a membership. The app supports two types of users: admin users and ordinary users. Admin users have additional privileges compared to ordinary users.

## Features

The app provides the following features for ordinary users:

1. **Account Registration**: Users can create an account by providing their details such as username, email, and password.

2. **Sign-In**: Registered users can sign in to their account using their username and password.

3. **Sign-Out**: Users can sign out of their account to securely end their session.

4. **Profile Photo**: Users can upload a profile photo to personalize their account.

5. **Edit Account Info**: Users can update their account information, including username, email, and password.

6. **Delete Account**: Users can permanently delete their account and associated data from the app.

In addition to the above features, admin users have the following privileges:

1. **Delete Ordinary User Account**: Admin users can delete the account of an ordinary user.

## Setup Instructions

To set up and run the Membership Registration app locally, follow these steps:

1. Clone the repository from GitHub.

2. Install the required dependencies by running the command: `npm install`or `yarn add`.

3. Start the development server by running the command: `npm start` or `yarn start`.

4. Access the app in your web browser at the provided URL.

## File Structure

The file structure of the React application is as follows:

```
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── AccountRegistration.js
│   │   ├── SignIn.js
│   │   ├── SignOut.js
│   │   ├── ProfilePhotoUpload.js
│   │   ├── EditAccountInfo.js
│   │   ├── DeleteAccount.js
│   │   └── ...
│   ├── pages
│   │   ├── HomePage.js
│   │   ├── RegistrationPage.js
│   │   ├── SignInPage.js
│   │   ├── AccountSettingsPage.js
│   │   ├── AdminDashboardPage.js
│   │   └── ...
│   ├── services
│   │   ├── AuthService.js
│   │   ├── UserService.js
│   │   └── ...
│   ├── App.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Technologies Used

The Membership Registration app is built using the following technologies:

- React.js: JavaScript library for building user interfaces.
- HTML: Markup language for creating web pages.
- CSS: Styling language for designing web pages.
- Single singn-in using JWT-Token from google oauth2.
- Jest.js: Testing library for unit and integrated testing.
- npm: Package manager for installing dependencies and managing the project.

## Additional Considerations

- Security: Implement appropriate security measures such as password hashing and protection against cross-site scripting (XSS) attacks.

- User Validation: Validate user inputs to ensure data integrity and prevent potential issues.

- Error Handling: Implement error handling mechanisms to provide users with meaningful error messages in case of failures.

- User Experience: Focus on creating an intuitive and user-friendly interface to enhance the overall user experience.

- Testing: Consider implementing unit tests and integration tests to ensure the app's functionality and catch any potential issues.

- Deployment: Plan for deploying the app to a hosting platform or server to make it accessible to users over the internet.
