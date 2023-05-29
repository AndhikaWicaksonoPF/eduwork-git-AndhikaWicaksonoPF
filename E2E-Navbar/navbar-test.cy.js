/// <reference types="cypress" />

describe('Navbar Test', function() {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
  
    it('should navigate to Online Banking', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', '/online-banking.html')
        cy.get('h1').should('be.visible')
    })
  
    it('should navigate to Feedback', () => {
        cy.contains('Feedback').click()
        cy.url().should('include', '/feedback.html')
    })
    
    it('should navigate to Home page', () => {
        cy.contains('Home').click()
        cy.url().should('include', '/index.html')
      })

    it('should navigate to Signin', () => {
        cy.contains('Signin').click()
        cy.url().should('include', '/login.html')
    })
  
  })
  