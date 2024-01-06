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
Given("Click on campaigns from the menu", () => {
    cy.contains("Campaigns").click();
});
Given("click on Add new button", () => {
    cy.contains("Add new").click();
});
When("Enter name in name input field", () => {
    cy.get("#Name").clear().type("campaigns test");
});
When("Enter subject in Subject input field", () => {
    cy.get("#Subject").clear().type("test");
});
When("Enter body in Body input field", () => {
    cy.get("#Body").clear().type("test test");
});
When("Click on Save button", () => {
    cy.get("[name=save]").click();
});
Then(
    "The new campaigns should be added successfully with {string}",
    (message) => {
        cy.wait(500);
        cy.get(".alert-success").should("contain", message);
    }
);