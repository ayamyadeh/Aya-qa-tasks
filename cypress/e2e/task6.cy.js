/// <reference types="cypress" />

describe("", () => {
    const email = "admin@yourstore.com";
    const password = "admin";
    before(() => {

        cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
        cy.login(email, password);
        cy.wait(3000)
        cy.get("#nopSideBarPusher").click();
        cy.get(".nav-sidebar > li:nth-child(2) > a").click();
        cy.contains("Products").click();

        for (let i = 0; i < 2; i++) {
            cy.contains("Add new").click();
            cy.get(".fa-plus").eq(0).click();
            cy.get("#Name").clear().type("laptop" + i);
            cy.get(".fa-plus").eq(1).click();
            cy.get("#product-price-area input").last().clear({ force: true }).type("3000", { force: true });
            cy.get("[name=save]").click();

        }

    });

    it('Verify if the user can search and delete product', () => {
        cy.get("#SearchProductName").type("Laptop");
        cy.get("#search-products").click();
        cy.get('.sorting_disabled  .mastercheckbox').eq(0).check();
        cy.get('#delete-selected').click();
        cy.get('#delete-selected-action-confirmation-submit-button').click();
        cy.wait(3000)
        cy.get('.dataTables_empty').should("exist");


    });
});