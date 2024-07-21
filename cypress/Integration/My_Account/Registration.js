///<reference types="cypress"/>

// Describe the test suite for the Registration functionality
describe('Registration Test', () => {

  // Define the user details as a constant object
  const user = {
    firstName: 'Kumar',
    lastName: 'Jare',
    email: 'kumarsanu11@gmail.com',
    telephone: '8856097872',
    password: 'sskkll',
    confirmPassword: 'sskkll'
  };

  // Define the individual test case for registering a new user
  it('register a new user', () => {
    // Visit the registration page
    cy.visit('https://tutorialsninja.com/demo/index.php?route=account/register');
    
    // Enter the first name into the first name input field
    cy.get('#input-firstname').type(user.firstName);
    
    // Enter the last name into the last name input field
    cy.get('#input-lastname').type(user.lastName);
    
    // Enter the email address into the email input field
    cy.get('#input-email').type(user.email);
    
    // Enter the telephone number into the telephone input field
    cy.get('#input-telephone').type(user.telephone);
    
    // Enter the password into the password input field
    cy.get('#input-password').type(user.password);
    
    // Enter the confirmation password into the confirm password input field
    cy.get('#input-confirm').type(user.confirmPassword);
    
    // Check the agreement checkbox
    cy.get('input[name="agree"]').check();
    
    // Click the continue button to submit the registration form
    cy.get('input[value="Continue"]').click();
    
    // Verify that the 'Your Account Has Been Created!' text is visible to confirm successful registration
    cy.contains('Your Account Has Been Created!').should('be.visible');
  });

});
