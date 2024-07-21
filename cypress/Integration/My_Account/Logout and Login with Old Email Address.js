///<reference types="cypress"/>

describe('Login with Old Email Address', () => {

    const user = {
      oldEmail: 'darkundeshivam11@gmail.com',
      password: 'password123'
    };
  
    it('logout and login with the old email address', () => {
      // Log out
      cy.visit('https://tutorialsninja.com/demo/index.php?route=account/logout');
      // Log in with the old email address
      cy.visit('https://tutorialsninja.com/demo/index.php?route=account/login');
      cy.get('#input-email').type(user.oldEmail);
      cy.get('#input-password').type(user.password);
      cy.get('input[value="Login"]').click();
      // Verify login success
      cy.url().should('include', 'account/account');
    });
  
  });
  