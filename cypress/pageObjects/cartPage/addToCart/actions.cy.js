class addToCartActions {
    openMagentoWebsite() {
        cy.visit("https://magento.softwaretestingboard.com");
        return this;
    }

    SearchForProducts(productName) {
        cy.get("#search").type(productName);
        return this;
    }
    ChooseTheProduct() {
        cy.get(".product-items li").first().click();
        return this;
    }
    chooseSizeAndColor(size, colorIndex) {
        cy.get(".swatch-attribute.size").contains(size).click();
        cy.get(".swatch-attribute.color").find(".swatch-option").eq(colorIndex).click();

        return this;
    }
    clickOnButton() {
        cy.get("#product-addtocart-button").click();
        return this;

    }
}
export default addToCartActions;