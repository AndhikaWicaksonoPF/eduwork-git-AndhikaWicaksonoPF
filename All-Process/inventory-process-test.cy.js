/// <reference types="cypress" />

describe('Inventory', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include', '/inventory.html')
    })
  
    it('should display the product list', () => {
        cy.get('.inventory_item').should('have.length.greaterThan', 0)
    })
  
    it('should be able to add a product to the cart', () => {
        cy.get('.inventory_item').first().find('.btn_primary').click()
        cy.get('.shopping_cart_badge').should('contain.text', '1')
        cy.get('.shopping_cart_link').click()
    
        cy.get('.cart_item').should('have.length', 1)
    })
  
    it('should be able to remove a product from the cart', () => {
        cy.get('.inventory_item').first().find('.btn_primary').click()
        cy.get('.shopping_cart_link').click();
        cy.url().should('include', '/cart.html')
    
        cy.get('.cart_item').should('have.length', 1)
        cy.get('.cart_item').first().find('.btn_secondary').click()
    
        cy.get('.cart_item').should('have.length', 0)
    })

    it('Should be able to checkout a product', () => {
        cy.get('.inventory_item').first().find('.btn_primary').click()
        cy.get('.shopping_cart_badge').should('contain.text', '1')
        cy.get('.shopping_cart_link').click()
        
        cy.get('.cart_item').should('have.length', 1)
        cy.get('.checkout_button').click()
    
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