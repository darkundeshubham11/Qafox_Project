///<reference types="cypress"/>

describe('View Shopping Cart', () => {
    const user = {
        firstName: 'Kumar',
        lastName: 'Jare',
        company: 'SDK',
        address: 'Hinjewadi phase 1',
        city: 'Pune',
        postcode: '411051',
        email: 'darkundeshivaraj12@gmail.com',
        password: 'password123'
      };

    it('view the shopping cart', () => {
      cy.visit('https://tutorialsninja.com/demo/');
      // Add product to the cart first
      cy.get('input[name="search"]').type('HP LP3065');
      cy.get('button.btn.btn-default.btn-lg').click();
      cy.contains('HP LP3065').parent().parent().find('button[onclick^="cart.add"]').click();
      // Click on the 'shopping cart!' link in the displayed success message.
      cy.xpath('//button[@id="button-cart"]').should('be.visible').click();
      // Verify the shopping cart page is displayed
      cy.xpath('//div[@id="cart"]/button').should('be.visible').click();
      cy.xpath('//p/a[@href="https://tutorialsninja.com/demo/index.php?route=checkout/cart"]').should('be.visible').click();
      cy.contains('Checkout').click();
            
        // Enter the email address into the email input field
        cy.get('#input-email').type(user.email);
        
        // Enter the password into the password input field
        cy.get('#input-password').type(user.password);
        
        // Click the login button to submit the login form
        cy.get('input[value="Login"]').click();
        cy.get('#input-payment-firstname').type(user.firstName);
        cy.get('#input-payment-lastname').type(user.lastName);
        cy.get('#input-payment-company').type(user.company);
        cy.get('#input-payment-address-1').type(user.address);
        cy.get('#input-payment-city').type(user.city);
        cy.get('#input-payment-postcode').type(user.postcode);
        

    });
  
  });
  