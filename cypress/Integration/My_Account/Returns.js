///<reference types="cypress"/>

// Describe the test suite for the Returns functionality
describe('Returns', () => {

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

  // Define the individual test case for viewing return requests
  it('returns', () => {
    // Click on the 'View your return requests' link
    cy.contains('View your return requests').click();
    
    // Verify that the URL includes 'account/return' to confirm navigation to the return requests page
    cy.url().should('include', 'account/return');
    
    // Check that the 'Product Returns' text is visible to confirm the return requests page is displayed
    cy.contains('Product Returns').should('be.visible');
  });

});
