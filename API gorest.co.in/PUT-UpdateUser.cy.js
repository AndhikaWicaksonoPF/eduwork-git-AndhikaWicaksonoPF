describe('PUT Request', () => {
  it('Should update an existing user', () => {
    cy.request({
      method: 'PUT',
      url: 'https://gorest.co.in/public/v2/users/3303568',
      headers: {
        'Authorization': 'Bearer 1b9bde9bb2a149c9e4e0d78a98b5e33be85ad84ba11d66294e4a463b5044889b',
      },
      body: {
        name: 'Andhika Wicaksono',
        status: 'inactive'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq("Andhika Wicaksono");
      expect(response.body.status).to.eq("inactive");
    });
  });
});
