/// <reference types="cypress" />

describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('should display an error message with invalid credentials', () => {
    cy.get('[data-test="username"]').type('invalid_user')
    cy.get('[data-test="password"]').type('wrong_password')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should('be.visible')
  })

  it('should successfully log in with valid credentials', () => {
    cy.fixture("user").then(user => {
          const username = user.username
          const password = user.password

          cy.get('#user-name').type(username)
          cy.get('#password').type(password)

          cy.get('input[type="submit"]').click()
      })
      
    cy.url().should('include', '/inventory.html')
  })
})
