/// <reference types="cypress" />

it("task2", () => {
    //cy.visit("/");
    //cy.get(".showcart");
    //cy.get(".message");
    //cy.get("#search");
    cy.visit("/checkout/#shipping");
    cy.get('#search').clear('s');
    cy.get('#search').type('shirt{enter}');
    cy.get(':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
    cy.get('#option-label-size-143-item-167').click();
    cy.get('.swatch-attribute.color > .swatch-attribute-options').click();
    cy.get('#option-label-color-93-item-57').click();
    cy.get('#product-addtocart-button > span').click();
    cy.wait(5000);
    cy.get('.showcart').click();
    cy.get('#top-cart-btn-checkout').click();
    cy.wait(7000);
    //cy.get('.showcart').click();
    // get Email using css-selector (#id )
    cy.get('#customer-email');
    // get firstname using css-selector('[attribute=value]')
    cy.get('[name=firstname]');
    // get lastname using css-selector('[attribute=value]')
    cy.get('[name=lastname]');
    // get company using css-selector('[attribute=value]')
    cy.get('[name=company]');
    // get street using css-selector('[attribute=value]')
    cy.get('[name="street[0]"]');
    // get street using css-selector('[attribute=value]')
    cy.get('[name="street[1]"]');
    // get street using css-selector('[attribute=value]')
    cy.get('[name="street[2]"]');
    // get city using css-selector('[attribute=value]')
    cy.get('[name=city]');
    // get State/Province using css-selector('[attribute=value]')
    cy.get('[name=region_id]');
    // get postcode using css-selector('[attribute=value]')
    cy.get('[name=postcode]');
    // get country using css-selector('[attribute=value]')
    cy.get('[name=country_id]');
    // get Phone Number using css-selector (.class1.class2)
    cy.get('._required ._with-tooltip .input-text');
    // get Shipping Methods using css - selector('[attribute=value]')
    cy.get('[name=ko_unique_1]');
    // get Shipping Methods using css-selector('[attribute=value]')
    cy.get('[name=ko_unique_2]');
    cy.get('.actions-toolbar .primary[type=submit]');
})