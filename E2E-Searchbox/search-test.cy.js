/// <reference types="cypress" />

describe('Pencarian di zero.webappsecurity.com', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.contains('Sign in').click()
    })
    it('Melakukan pencarian dan melakukan asseri berdasarkan data yang diperoleh', () => {
      cy.get('#searchTerm').type('online {enter}')

      cy.get('h2').should('contain', 'Search Results:')
    })
  })
  