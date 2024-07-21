///<reference types="cypress"/>
require('cypress-xpath');

// Describe the test suite for the Order History functionality
describe('Order History', () => {

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

  // Define the individual test case for the Order History functionality
  it('order history', () => {
    // Click on the order history link using XPath to locate the element
    cy.xpath('//ul/li[1]/a[contains(@href, "order")]').click();
    
    // Verify that the URL includes 'account/order' to confirm navigation to the order history page
    cy.url().should('include', 'account/order');
    
    // Check that the 'Order History' text is visible to confirm the order history page is displayed
    cy.contains('Order History').should('be.visible');
  });

});
