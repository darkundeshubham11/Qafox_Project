///<reference types="cypress"/>

// Describe the test suite for the Logout functionality
describe('Logout Test', () => {
  
  // Define the user credentials as a constant object
  const user = {
    email: 'shubam11@gmail.com',
    password: 'password123'
  };

  // Define the individual test case for logging out
  it('logout', () => {
    
    // Visit the login page
    cy.visit('https://tutorialsninja.com/demo/index.php?route=account/login');
    
    // Enter the email address into the email input field
    cy.get('#input-email').type(user.email);
    
    // Enter the password into the password input field
    cy.get('#input-password').type(user.password);
    
    // Click the login button to submit the login form
    cy.get('input[value="Login"]').click();
    
    // Open the dropdown menu by clicking on the account dropdown toggle
    cy.get('ul.list-inline > li.dropdown > a.dropdown-toggle').first().click();
    
    // Click the logout link in the dropdown menu
    cy.get('ul.dropdown-menu-right > li > a[href="https://tutorialsninja.com/demo/index.php?route=account/logout"]').click();
    
    // Verify that the URL includes 'account/logout' to confirm the logout
    cy.url().should('include', 'account/logout');
    
    // Check that the 'Account Logout' text is visible to confirm the logout page is displayed
    cy.contains('Account Logout').should('be.visible');
  });
});
