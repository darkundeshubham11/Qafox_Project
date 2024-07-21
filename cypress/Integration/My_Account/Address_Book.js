///<reference types="cypress"/>

// Describe the test suite for the Address Book functionality
describe('Address Book', () => {

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

  // Define the individual test case for the Address Book functionality
  it('address book', () => {
    // Click on the 'Modify your address book entries' link
    cy.contains('Modify your address book entries').click();
    
    // Verify that the URL includes 'account/address' to confirm navigation to the address book page
    cy.url().should('include', 'account/address');
    
    // Check that the 'Address Book Entries' text is visible to confirm the address book page is displayed
    cy.contains('Address Book Entries').should('be.visible');
  });

});
