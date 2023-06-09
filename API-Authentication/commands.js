Cypress.Commands.add('loginViaAPI', ({ email, password } = {}) => {
  const apiUrl = Cypress.env('apiUrl');
  const userEmail = email || Cypress.env('userEmail');
  const userPassword = password || Cypress.env('userPassword');

  cy.request('POST', `${apiUrl}/login`, {
    email: userEmail,
    password: userPassword,
  }).then((response) => {
    cy.setCookie('token', response.body.token)
  })
})

