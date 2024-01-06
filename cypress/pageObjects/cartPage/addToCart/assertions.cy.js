class addToCartAssrtions {


    checkCounterOfTheCartIsVisible() {
        cy.get(".counter-number").should("be.visible")
    }
}

export default addToCartAssrtions;