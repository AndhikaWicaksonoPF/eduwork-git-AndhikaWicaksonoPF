it.only('Validate Header and Body', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
    cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')

    cy.get('@pokemon').its('body')
        .should('not.be.empty')
        .then((responseBody) => {
            expect(responseBody.name).to.equal('ditto');
            expect(responseBody.base_experience).to.be.a('number');
            expect(responseBody.types).to.be.an('array').that.is.not.empty;
        });
});
