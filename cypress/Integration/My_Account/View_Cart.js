///<reference types="cypress"/>

describe('View Shopping Cart', () => {

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
      
    });
  
  });
  