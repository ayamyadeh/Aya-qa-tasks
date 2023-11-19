/// <reference types="cypress" />
describe("", () => {
    it("signin", () => {
        cy.visit("https://demo.productionready.io/#/login")
        cy.contains("h1", "Sign in");
        cy.contains("Need an account?");
        cy.get(".form-group").find("input").eq(1)
        cy.get(".form-group").find("input").eq(2)
        cy.contains("button", "Sign in");
    })

    it("homepage", () => {
        cy.visit("https://demo.productionready.io/#/ ");
        cy.contains("a", "conduit");
        cy.get(".navbar ul li").first();
        cy.contains("a", " Sign up");
        cy.contains("h1", "conduit", { matchCase: false });
        cy.contains("A place to share your knowledge.");
        cy.contains("Global Feed");
        cy.get("favorite-btn").first();
        cy.contains("span", "Read more...").first();
        cy.contains("Popular Tags");
        cy.contains("codebaseShow");
        cy.get(".sidebar > div >a ").contains("deserunt");
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > .article-preview > .preview-link > h1.ng-binding').click();
        /* ==== End Cypress Studio ==== */
        cy.wait(3000);
        cy.get(".banner div").find('h1');
        cy.get(".banner a img");
        cy.contains("a", "Anah Benešová");
        cy.contains("December 9, 2022");
        cy.contains("Favorite Article");
        cy.contains("Follow Anah Benešová");
        cy.get(".col-xs-12  ").find("div").first();
        cy.get(".tag-list  ").find("li").first();
        cy.get(".tag-list  ").find("li").last();

    })

})