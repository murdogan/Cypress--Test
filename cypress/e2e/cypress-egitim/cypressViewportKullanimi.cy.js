describe("Vieport Kullanımı", () => {
  it("Vieport With number", () => {
    cy.viewport(1200, 1000);
    cy.visit("https://shopist.io");
  });
  it("Vieport With number", () => {
    cy.viewport("macbook-16");
    cy.visit("https://shopist.io");
  });
  it("Vieport With number", () => {
    cy.viewport("iphone-se2");
    cy.visit("https://shopist.io");
  });
});
