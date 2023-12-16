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
        cy.contains("Add new").click();
        cy.get(".fa-plus").eq(0).click();
        cy.get("#Name").clear({ force: true }).type("laptop123", { force: true });

        cy.get(".fa-plus").eq(1).click();
        cy.get("#product-price-area input").last().clear({ force: true }).type("3000", { force: true });
        cy.get("[name=save]").click();
        cy.get(".alert-success").should("contain", "The new product has been added successfully.");
        // Add another product
        cy.contains("Add new").click();
        cy.get("#Name").clear({ force: true }).type("laptop12", { force: true });
        cy.get("#product-info .card-tools button").click();
        cy.get("#product-price-area input").last().clear({ force: true }).type("3000", { force: true });
        cy.get("[name=save]").click();
        cy.get(".alert-success").should("contain", "The new product has been added successfully.")


    });

    it('Verify if the user can search and delete product', () => {
        cy.get("#SearchProductName").type("Laptop");
        cy.get("#search-products").click();
        cy.get('.sorting_disabled  .mastercheckbox').eq(0).check();
        cy.get('#delete-selected').click();
        cy.get('#delete-selected-action-confirmation-submit-button').click();
        cy.wait(300)
        cy.get('.dataTables_empty').should("exist");


    });
});