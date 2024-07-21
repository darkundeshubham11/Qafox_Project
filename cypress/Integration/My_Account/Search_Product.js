///<reference types="cypress"/>

describe('Search Product', () => {

    it('search for a product', () => {
      cy.visit('https://tutorialsninja.com/demo/');
      // Enter any existing Product name into the Search text box field.
      cy.get('input[name="search"]').type('HP LP3065');
      // Click on the button having search icon.
      cy.get('button.btn.btn-default.btn-lg').click();
      // Verify the product is displayed in the search results
      cy.contains('HP LP3065').should('be.visible');
    });
  
  });
  