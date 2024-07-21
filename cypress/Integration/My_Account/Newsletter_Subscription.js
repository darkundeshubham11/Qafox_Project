///<reference types="cypress"/>

// Describe the test suite for the Newsletter Subscription functionality
describe('Newsletter Subscription', () => {

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

  // Define the individual test case for the Newsletter Subscription functionality
  it('newsletter subscription', () => {
    // Click on the 'Subscribe / unsubscribe to newsletter' link
    cy.contains('Subscribe / unsubscribe to newsletter').click();
    
    // Verify that the URL includes 'account/newsletter' to confirm navigation to the newsletter subscription page
    cy.url().should('include', 'account/newsletter');
    
    // Check that the 'Newsletter' text is visible to confirm the newsletter subscription page is displayed
    cy.contains('Newsletter').should('be.visible');
  });

});
