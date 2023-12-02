/// <reference types="cypress" />

describe("Create an Account", () => {
    it("visible", () => {
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
        //first name field is visible
        cy.get("#firstname").should("be.visible");
        //last name field is visible
        cy.get("#lastname").should("be.visible");
        //email  field is visible
        cy.get("#email_address").should("be.visible");
        //password field is visible
        cy.get("#password").should("be.visible");
        //password confirmation field is visible
        cy.get("#password-confirmation").should("be.visible");
        //Create an Account button is visible
        cy.get(".submit").should("be.visible");

    })
    it("create an account", () => {
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
        //Enter a value in the First Name field
        cy.get("#firstname").clear().type("Aya" + "{enter}");
        //Enter a value in the Last Name field
        cy.get("#lastname").clear().type("Myadmeh" + "{enter}");
        //Enter a value in the Email field
        cy.get("#email_address").clear().type("ayamyadmeh6@gmail.com" + "{enter}");
        //Enter a value in the Password field
        cy.get("#password").clear().type("Ayamyadmeh12" + "{enter}");
        //Enter a value in the Password-Confirmation field
        cy.get("#password-confirmation").clear().type("Ayamyadmeh12");
        //Click on Create Account button
        cy.get(".submit").click();
        cy.wait(3000);
        //Verify that an account has been created by displaying a success message
        cy.get(".message-success").should("contain", "Thank you for registering");



    })

})