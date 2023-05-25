/// <reference types="cypress" />

describe('Login & Logout test', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.contains('Signin').click()
    })
    
    it('should display error message with invalid credentials', () => {
        cy.get('#user_login').type('invalid-username');
        cy.get('#user_password').type('invalid-password');
        cy.contains('Sign in').click()
    
        cy.get('.alert-error').should('be.visible');
        cy.get('.alert-error').should('contain', 'Login and/or password are wrong.')
      })

    it('Should try to login with valid data', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
  
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.contains('Sign in').click()
        })
    })

    it('should logout successfully', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
  
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.contains('Sign in').click()
      })
        cy.contains('username').click()
        cy.contains('Logout').click()
        cy.url().should('include', '/index.html')
    })  
})