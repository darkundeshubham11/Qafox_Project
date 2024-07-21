
## Introduction
This project involves automated testing for the "Qafox" website's "My Account" functionalities using Cypress. The tests cover user registration, login, navigation to various account-related pages (order history, downloads, change password, etc.), and user logout.

## Project Type
Frontend

## Deployed App
Frontend: https://tutorialsninja.com/demo

## Directory Structure
```
Qafox_Project/
├─ cypress/
│  ├─ fixtures/
│  │  ├─ example.json
│  ├─ integration/
│  │  ├─ My-Account/
│  │  │  ├─ Address_Book.js
│  │  │  ├─ Change_Password.js
│  │  │  ├─ Downloads.js
│  │  │  ├─ Login.js
│  │  │  ├─ Logout.js
│  │  │  ├─ Newsletter_Subscription.js
│  │  │  ├─ Order_History.js
│  │  │  ├─ Registration.js
│  │  │  ├─ Returns.js
│  │  │  ├─ Reward_Points.js
│  │  │  ├─ Transactions.js
│  │  │  ├─ Update_Account.js
│  ├─ support/
│  │  ├─ commands.js
│  │  ├─ e2e.js
├─ Mind_map/
│  ├─ My Account.jpg
│  ├─ Qafox Test Plan.jpg
├─ node_modules/
├─ Test Plan and Summary Report/
│  ├─ SUMMARY REPORT (My account feature) Qafox.pdf
│  ├─ Test Plan for My Account feature Construct week Project.pdf
├─ Test_Cases and Bug Report/
│  ├─ Bug Report.xlsx
│  ├─ Test Scenario & Test Cases.xlsx
├─ cypress.config.js
├─ package-lock.json
├─ package.json
```

## Video Walkthrough of the Project
Attach a very short video walkthrough of all the features [1 - 3 minutes]

## Video Walkthrough of the Codebase
Attach a very short video walkthrough of the codebase [1 - 5 minutes]

## Features
- User Registration
- User Login
- Navigation to Change Password Page
- Navigation to Update Account Page
- Navigation to Address Book Page
- Navigation to Order History Page
- Navigation to Downloads Page
- Navigation to Reward Points Page
- Navigation to Returns Page
- Navigation to Transactions Page
- Navigation to Newsletter Subscription Page
- User Logout

## Design Decisions or Assumptions
- Cypress is chosen for its ease of use and powerful features for end-to-end testing.
- Each functionality (e.g., navigation to different pages) is tested in isolation for better modularity and maintainability.
- Tests assume the presence of certain text on the pages to verify navigation success (e.g., "Order History", "Your Downloads").

## Installation & Getting Started
Detailed instructions on how to install, configure, and get the project running.

```bash
# Clone the repository
git clone https://github.com/darkundeshubham11/Qafox_Project.git

# Navigate to the project directory
cd Qafox_Project

# Install dependencies
npm install

# Open Cypress test runner
npx cypress open
```

## Usage
Provide instructions and examples on how to use your project.

```bash
# To run all tests in headless mode
npx cypress run

# To run a specific test
npx cypress run --spec "cypress/integration/my-account/order-history.spec.js"
```

Include screenshots as necessary.





## Credentials
Provide user credentials for authenticated pages (used for testing purposes).

- Email: shubam11@gmail.com
- Password: password123

## APIs Used
N/A

## API Endpoints
N/A

## Technology Stack
List and provide a brief overview of the technologies used in the project.

- **Cypress**: End-to-end testing framework for web applications.
- **Node.js**: JavaScript runtime environment.
- **npm**: Package manager for JavaScript.

Feel free to adjust the provided details to match your specific project setup and requirements.