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
Given("Click on affiliates from the menu", () => {
    cy.contains("Affiliates").click();

});
Given("Click on Add new button", () => {
    cy.contains("Add new").click();
});
When("Check active option in active checkbox field", () => {
    cy.get("#Active").check()
});
When("Enter farstname in farstname input field", () => {
    cy.get("#Address_FirstName").clear().type("Jan");
});
When("Enter lastname in lastname input field", () => {
    cy.get("#Address_LastName").clear().type("Smith");
});
When("Enter email in email input field", () => {
    cy.get("#Address_Email").clear().type("jansmith@gmail.com");
});
When("Select Country from Country select field", () => {
    cy.get("#Address_CountryId").select("United States")
});
When("Enter City in City input field", () => {
    cy.get("#Address_City").clear().type("Newyork");
});
When("Enter Address in Address input field", () => {
    cy.get("#Address_Address1").clear().type("Newyork");
});
When("Enter Zip / postal code  in Zip / postal code input field", () => {
    cy.get("#Address_ZipPostalCode").clear().type("213");
})
When("Enter Phone number Phone number input field", () => {
    cy.get("#Address_PhoneNumber").clear().type("05736485783");
});
When("Click on Save button", () => {
    cy.get("[name=save]").click();

});
Then("The new discount should be added successfully with {string}", (message) => {
    cy.wait(500)
    cy.get(".alert-success").should("contain", message)
});