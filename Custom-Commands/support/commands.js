Cypress.Commands.add('login', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')
    cy.get('#user_remember_me').click()
    cy.contains('Sign in').click()
  })
  
Cypress.Commands.add('payBill', (payee, account, amount) => {
    cy.contains('Pay Bills').click()
    cy.get('#sp_payee').select(payee)
    cy.get('#sp_account').select(account)
    cy.get('#sp_amount').type(amount)
    cy.get('#sp_date').type('2023-05-22')
    cy.get('#sp_description').type('Pembayaran tagihan', {force: true})
    cy.get('#pay_saved_payees').click()

  })
  