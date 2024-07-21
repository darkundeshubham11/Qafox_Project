///<reference types="cypress"/>

// Describe the test suite for the Transactions functionality
describe('Transactions', () => {

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

  // Define the individual test case for viewing transactions
  it('transactions', () => {
    // Click on the 'Your Transactions' link
    cy.contains('Your Transactions').click();
    
    // Verify that the URL includes 'account/transaction' to confirm navigation to the transactions page
    cy.url().should('include', 'account/transaction');
    
    // Check that the 'Your Transactions' text is visible to confirm the transactions page is displayed
    cy.contains('Your Transactions').should('be.visible');
  });

});
