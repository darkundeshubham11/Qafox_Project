///<reference types="cypress"/>

describe('Login with New Email Address', () => {

    const user = {
      email: 'darkundeshivaraj12@gmail.com',
      password: 'password123'
    };
  
    it('logout and login with the new updated email address', () => {
      // Log out
      cy.visit('https://tutorialsninja.com/demo/index.php?route=account/logout');
      // Log in with the new email address
      cy.visit('https://tutorialsninja.com/demo/index.php?route=account/login');
      cy.get('#input-email').type(user.email);
      cy.get('#input-password').type(user.password);
      cy.get('input[value="Login"]').click();
      // Verify login success
      cy.url().should('include', 'account/account');
    });
  
  });
  