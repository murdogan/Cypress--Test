describe("Cypress Env Variables", () => {
  it("Ortam Değişkenlerini kullanma", () => {
    cy.visit(Cypress.env("amazon"));
  });
});
