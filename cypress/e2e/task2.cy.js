/// <reference types="cypress" />

it("task2", () => {
    cy.visit("/checkout/#shipping");
    cy.get('#search').clear('s');
    cy.get('#search').type('shirt{enter}');
    cy.get(':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
    cy.get('#option-label-size-143-item-167').click();
    cy.get('.swatch-attribute.color > .swatch-attribute-options').click();
    cy.get('#option-label-color-93-item-57').click();
    cy.get('#product-addtocart-button > span').click();
    cy.wait(3000);
    cy.get('.showcart').click();
    cy.get('#top-cart-btn-checkout').click();
    cy.wait(5000);
    // get Email using css-selector (#id )
    cy.get('#customer-email');
    // get Firstname using css-selector('[attribute=value]')
    cy.get('[name=firstname]');
    // get Lastname using css-selector('[attribute=value]')
    cy.get('[name=lastname]');
    // get Company using css-selector('[attribute=value]')
    cy.get('[name=company]');
    // get Street Addres 1 using css-selector('[attribute=value]')
    cy.get('[name="street[1]"]');
    // get Street Addres 2 using css-selector('[attribute=value]')
    cy.get('[name="street[1]"]');
    // get Street Addres 3 using css-selector('[attribute=value]')
    cy.get('[name="street[2]"]');
    // get City using css-selector('[attribute=value]')
    cy.get('[name=city]');
    // get State/Province using css-selector('[attribute=value]')
    cy.get('[name=region_id]');
    // get Zip/Postal Code using css-selector('[attribute=value]')
    cy.get('[name=postcode]');
    // get Country using css-selector('[attribute=value]')
    cy.get('[name=country_id]');
    // get Phone Number using css-selector ('[attribute=value]')
    cy.get('[name=telephone]');
    // get Shipping Methods  first choose using css-selector('[attribute=value]')
    cy.get('[value=tablerate_bestway]');
    // get Shipping Methods second  choose using css-selector('[attribute=value]')
    cy.get('[value=flatrate_flatrate]');
    // get Next Button using css-selector (.class )
    cy.get('.button ');
})