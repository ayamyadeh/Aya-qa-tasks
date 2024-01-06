class sharedActions {
    openMagentoWebsite(url) {
        cy.visit(url);
        return this;
    }
}
export default sharedActions;