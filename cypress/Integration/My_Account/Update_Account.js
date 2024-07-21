///<reference types="cypress"/>

// Describe the test suite for updating account information
describe('Update Account Information', () => {
  
  // Define the user credentials as a constant object
  const user = {
    email: 'shubam11@gmail.com',
    password: 'password123'
  };

  // Define the individual test case for updating account information
  it('update account information', () => {
    // Visit the login page
    cy.visit('https://tutorialsninja.com/demo/index.php?route=account/login');
    
    // Enter the email address into the email input field
    cy.get('#input-email').type(user.email);
    
    // Enter the password into the password input field
    cy.get('#input-password').type(user.password);
    
    // Click the login button to submit the login form
    cy.get('input[value="Login"]').click();
    
    // Click on the 'Edit your account information' link
    cy.contains('Edit your account information').click();
    
    // Clear the current first name and enter a new value
    cy.get('#input-firstname').clear().type('Shivam');
    
    // Clear the current last name and enter a new value
    cy.get('#input-lastname').clear().type('More');
    
    // Click the continue button to submit the updated information
    cy.get('input[value="Continue"]').click();
    
    // Verify that the success message is visible to confirm the update was successful
    cy.contains('Success: Your account has been successfully updated.').should('be.visible');
  });

});
