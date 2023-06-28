///<reference types="cypress-iframe" />
describe("Midtrans Virtual Account Payment", () => {

    it("Completes the booking and Virtual Account payment successfully", () => {
        cy.visit("https://demo.midtrans.com/");

        cy.contains("BUY NOW").click();

        cy.contains("CHECKOUT").click()

        cy.frameLoaded("#snap-midtrans").its("0.contentDocument.body").should("not.be.empty").then(cy.wrap);

        cy.iframe("#snap-midtrans").contains("Virtual account").click();

        cy.iframe("#snap-midtrans").contains("BCA").click();
        cy.iframe("#snap-midtrans").should('contain', "Virtual account number");

        cy.iframe("#snap-midtrans").contains("Back to merchant").click();
    });
});