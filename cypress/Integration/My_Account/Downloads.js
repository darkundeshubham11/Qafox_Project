///<reference types="cypress"/>

// Describe the test suite for the Downloads functionality
describe('Downloads', () => {

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

  // Define the individual test case for the Downloads functionality
  it('downloads', () => {
    // Click on the downloads link using XPath to locate the element
    cy.xpath('//ul/li[2]/a[contains(@href, "download")]').click();
    
    // Verify that the URL includes 'account/download' to confirm navigation to the downloads page
    cy.url().should('include', 'account/download');
    
    // Check that the 'Your Downloads' text is visible to confirm the downloads page is displayed
    cy.contains('Your Downloads').should('be.visible');
  });

});
