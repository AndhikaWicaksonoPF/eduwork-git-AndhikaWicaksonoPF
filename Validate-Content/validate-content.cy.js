it.only('Validate Content', () => {
    cy.request("https://pokeapi.co/api/v2/pokemon/ditto")
        .its("body")
        .then((response) => {
            expect(response.abilities[0].ability.name).to.eq("limber");
        });
});