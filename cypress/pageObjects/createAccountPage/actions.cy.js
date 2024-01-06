class createAccountPageActions {
    typeInFirstNamelInputField(firstName) {
        cy.get("#firstname").clear().type(firstName);
        return this;
    }
    typeInLastNameInputField(lastName) {
        cy.get("#lastname").clear().type(lastName);
        return this;
    }
    typeInEmailInputField(email) {
        cy.get("#email_address").clear().type(email);
        return this;
    }

    typeInPasswordInputField(password) {
        cy.get("#password").clear().type(password);
        return this;
    }
    typeInPasswordConfirmationInputField(confirmPassword) {
        cy.get("#password-confirmation").clear().type(confirmPassword);
        return this;
    }
    clicksOnCreateAnAccountButton() {
        cy.get(".submit.primary").click();
    }

}

export default createAccountPageActions;