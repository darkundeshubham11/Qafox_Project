///<reference types="cypress"/>

// Describe the test suite for the Reward Points functionality
describe('Reward Points', () => {

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

  // Define the individual test case for viewing reward points
  it('reward points', () => {
    // Click on the 'Your Reward Points' link
    cy.contains('Your Reward Points').click();
    
    // Verify that the URL includes 'account/reward' to confirm navigation to the reward points page
    cy.url().should('include', 'account/reward');
    
    // Check that the 'Your Reward Points' text is visible to confirm the reward points page is displayed
    cy.contains('Your Reward Points').should('be.visible');
  });

});
