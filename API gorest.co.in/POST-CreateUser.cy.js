/// <reference types="cypress" />
describe('Create User API Test', () => {
    it('Should create a new user', () => {
        const user = {
            name: 'John Doe',
            gender: 'male',
            email: 'johndoe123@newemail.com',
            status: 'active'
        };

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users/',
            headers: {
                'Authorization': 'Bearer 1b9bde9bb2a149c9e4e0d78a98b5e33be85ad84ba11d66294e4a463b5044889b',
                'Content-Type': 'application/json',
            },
            body: user
        }).then((response) => {
            expect(response.status).to.eq(201);
        });
    });
});