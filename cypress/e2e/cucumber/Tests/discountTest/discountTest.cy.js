import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const email = "admin@yourstore.com";
const password = "admin";
before(() => {
    Given("The user visit the nopcommerce login page", () => {
        cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F");
    });
    Given("The user login to website", () => {
        cy.login(email, password);
    });
});
Given("Click on Promotions from the dashboard", () => {
    cy.get("#nopSideBarPusher").click();
    cy.get(".nav-sidebar > li:nth-child(5) > a").click();
});
Given("Click on discount from the menu", () => {
    cy.contains("Discounts").click();

});
Given("Click on Add new button", () => {
    cy.contains("Add new").click();
});
When("Enter name in name input field", () => {
    cy.get("#Name").clear().type("discount");
});
When("Select discount type from discount type select field", () => {
    cy.get("#DiscountTypeId").select(1)
});
When("Check use percentage option in Use percentage checkbox field", () => {
    cy.get("#UsePercentage").check()
});
When("Enter discount amount in Discount amount input field", () => {
    cy.get("#pnlDiscountPercentage .k-numeric-wrap input.k-input").eq(0).type(20);
});
When("Click on Save button", () => {
    cy.get("[name=save]").click();
});
Then("The new discount should be added successfully with {string}", (message) => {
    cy.wait(500)
    cy.get(".alert-success").should("contain", message)
});