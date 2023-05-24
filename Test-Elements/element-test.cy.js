/// <reference types="cypress" />

describe('Login Test', () => {
    it('should login and activate "Keep me signed in"', () => {
      cy.visit('http://zero.webappsecurity.com/login.html')
  
      // Masukkan informasi login
      cy.get('#user_login').type('username')
      cy.get('#user_password').type('password')
  
      // Periksa dan aktifkan checkbox "Keep me signed in"
      cy.get('#user_remember_me').check()
  
    })
  })
  