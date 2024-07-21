///<reference types="cypress"/>

// Describe the test suite for the Login functionality
describe('Login Test', () => {

  // Define the user credentials as a constant object
  const user = {
    email: 'shubam11@gmail.com',
    password: 'password123'
  };

  // Define the individual test case for logging in
  it('login', () => {
    // Visit the login page
    cy.visit('https://tutorialsninja.com/demo/index.php?route=account/login');
    
    // Enter the email address into the email input field
    cy.get('#input-email').type(user.email);
    
    // Enter the password into the password input field
    cy.get('#input-password').type(user.password);
    
    // Click the login button to submit the login form
    cy.get('input[value="Login"]').click();
    
    // Verify that the URL includes 'account/account' to confirm successful login
    cy.url().should('include', 'account/account');
    
    // Check that the 'My Account' text is visible to confirm the account page is displayed
    cy.contains('My Account').should('be.visible');
  });

});
