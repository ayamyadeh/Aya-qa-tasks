class sharedAssertions {
    checkAlertMessageContainValue(message) {
        cy.get("[role=alert]").should("contain", message)
        return this;
    }
    checkUrlEqualValue(url) {
        cy.url().should("eq", url);
        return this;
    }
}
export default sharedAssertions;