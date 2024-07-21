///<reference types="cypress"/>

// Describe the test suite for the Change Password functionality
describe('Change Password', () => {

  // Define the user credentials as a constant object
  const user = {
    email: 'shubam11@gmail.com',
    password: 'password123'
  };

  // Set up the login process to run before each test
  beforeEach(() => {
    // Visit the login page
    cy.visit('https://tutorialsninja.com/demo/index.php?route=account/login');
    
    // Enter the email address into the email input field
    cy.get('#input-email').type(user.email);
    
    // Enter the password into the password input field
    cy.get('#input-password').type(user.password);
    
    // Click the login button to submit the login form
    cy.get('input[value="Login"]').click();
  });

  // Define the individual test case for changing the password
  it('change password', () => {
    // Click on the 'Change your password' link
    cy.contains('Change your password').click();
    
    // Verify that the URL includes 'account/password' to confirm navigation to the change password page
    cy.url().should('include', 'account/password');
    
    // Check that the 'Change Password' text is visible to confirm the change password page is displayed
    cy.contains('Change Password').should('be.visible');
  });

});
