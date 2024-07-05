describe("Cypress Fixture kullanımı", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/login");
  });

  it("Cypress Fixture data Kullanimi Valid", () => {
    cy.fixture("loginData").as("credentials");
    cy.get("@credentials").then((data) => {
      cy.login(data.validUsername, data.validPassword);
    });
  });
  it("Cypress Fixture data  InValid", () => {
    cy.fixture("loginData").as("credentials");
    cy.get("@credentials").then((data) => {
      cy.login(data.invalidUsername, data.invalidPassword);
    });
  });
});
