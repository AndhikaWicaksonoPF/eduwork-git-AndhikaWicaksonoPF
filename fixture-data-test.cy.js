/// <reference types="cypress" />

describe('Login With Fixture data', () => {
    it('should try to login', () => {
      cy.visit("https://www.saucedemo.com/")
  
      cy.fixture("user").then(user => {
          const username = user.username
          const password = user.password

          cy.get('#user-name').type(username)
          cy.get('#password').type(password)

          cy.get('input[type="submit"]').click()
      })

      cy.get('.inventory_item').first().find('.btn_primary').click();
      cy.get('.shopping_cart_badge').should('contain.text', '1');
      cy.get('.shopping_cart_link').click();
    
      cy.get('.cart_item').should('have.length', 1);
      cy.get('.checkout_button').click();
  
      cy.fixture("user").then(user => {
        const FirstName = user.FirstName
        const LastName = user.LastName
        const PostalCode = user.PostalCode
  
      cy.get('#first-name').type(FirstName)
      cy.get('#last-name').type(LastName)
      cy.get('#postal-code').type(PostalCode)
      cy.get('.cart_button').click()
      
      cy.get('.cart_button').click()      
        })        
      })
    })
