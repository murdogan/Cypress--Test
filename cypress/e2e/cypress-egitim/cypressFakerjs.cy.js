const { faker } = require("@faker-js/faker");

let fakeEmail = faker.internet.email();
let fakePassword = faker.internet.password();
let fakeName = faker.person.firstName();

describe("FakerJS Kullanimi örnek test", () => {
  it("fakerjs ile ornek test", () => {
    cy.visit("https://automationexercise.com/login");
    cy.get("input[data-qa='login-email']").type(fakeEmail);
    cy.get("input[data-qa='login-password']").type(fakePassword);
    cy.get("[data-qa='login-button']").click();
  });
  it("fakerjs ile ornek test-2", () => {
    cy.visit("https://automationexercise.com/login");
    cy.get("input[data-qa='login-email']").type(fakeName);
    cy.get("input[data-qa='login-password']").type(fakePassword);
    cy.get("[data-qa='login-button']").click();
    cy.get("input[data-qa='login-email']")
      .invoke("prop", "validationMessage")
      .should(
        "eq",
        `Please include an "@" in the email address. "${fakeName}" is missing an "@" .`
      );
  });
});
