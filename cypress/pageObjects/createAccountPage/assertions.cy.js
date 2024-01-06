class createAccountAssertions {

    checkPageTitleContainValue(value) {
        cy.get(".page-title").should("contain", value);
    }
}

export default createAccountAssertions;