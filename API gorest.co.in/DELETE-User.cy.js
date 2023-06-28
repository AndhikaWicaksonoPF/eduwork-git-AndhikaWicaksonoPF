describe('DELETE Request', () => {
    it('Should delete a user', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://gorest.co.in/public/v2/users/3303568',
            headers: {
                'Authorization': 'Bearer 1b9bde9bb2a149c9e4e0d78a98b5e33be85ad84ba11d66294e4a463b5044889b'
            }
        }).then((response) => {
            expect(response.status).to.eq(204);
        });
    });
});
