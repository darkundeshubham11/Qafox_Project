///<reference types="cypress"/>

describe('Add Product to Cart', () => {

    it('add a product to the cart', () => {
      cy.visit('https://tutorialsninja.com/demo/');
      // Enter any existing Product name into the Search text box field.
      cy.get('input[name="search"]').type('HP LP3065');
      // Click on the button having search icon.
      cy.get('button.btn.btn-default.btn-lg').click();
      // Click on 'Add to Cart' button on the Product displayed in the Search results.
      cy.contains('HP LP3065').parent().parent().find('button[onclick^="cart.add"]').click();
      // Click on add to cart button
      cy.xpath('//button[@id="button-cart"]').should('be.visible').click();
    });
  
  });
  