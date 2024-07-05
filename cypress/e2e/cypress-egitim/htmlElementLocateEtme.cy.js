describe("Cypress Locator", () => {
  it("Htmş element locate etme", () => {
    cy.get("#user-name"); //id Locate etme
    cy.get(".login-box"); // class Locate etme
    cy.get("input"); // tag locate etme
    cy.get('input[name="user-name"]'); //attribute locate
    cy.get('a:contains("Username")'); // Text iceren element locate
    cy.get("a").contains("Login"); // üsteki ile aynı kod
  });
});
