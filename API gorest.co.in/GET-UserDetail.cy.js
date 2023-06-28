describe('Get User Detail API Test', () => {
    it("get user by id", () => {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users/3303568",
            headers: {
                authorization: 'Bearer 1b9bde9bb2a149c9e4e0d78a98b5e33be85ad84ba11d66294e4a463b5044889b',
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.id).has.eq(3303568);
            expect(response.body.name).has.eq("John Doe");
            expect(response.body.email).has.eq("johndoe123@newemail.com");
        });
    });
})
