/// <reference types="cypress" />
it('task4', () => {
    cy.visit("https://magento.softwaretestingboard.com/")
        //Search for the item “shirt” 
    cy.get("#search").type("shirt" + "{enter}");
    //select the first product from the result page
    cy.get(".products .list li").eq(0).click();
    //Choose size “M”
    cy.get(".swatch-option.text").contains("M").click();;
    //Choose last color
    cy.get(".swatch-option.color").eq(2).click();
    //The quantity :3 items 
    cy.get("#qty").clear().type(3);
    //Add the product to the cart
    cy.get("#product-addtocart-button").click();

});