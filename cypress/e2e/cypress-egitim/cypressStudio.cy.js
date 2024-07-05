describe("Cypress Studio Kullanimi", () => {
  it("ornek kullanim", () => {
    cy.visit("https://shopist.io/");
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[href="/department/bedding"] > :nth-child(1) > .serif').click();
    cy.get(':nth-child(4) > :nth-child(1) > .product-card > img').click();
    cy.get('.modal-button').click();
    /* ==== End Cypress Studio ==== */
  });
});
