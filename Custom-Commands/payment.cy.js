/// <reference types="cypress" />

describe('Payment', () => {
    beforeEach(() => {
      cy.login()
      cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
    })
  
    it('should make a payment', () => {
      cy.payBill('Sprint', 'Checking', '100')
    })
  })