describe("Custom Commands", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/login");
  });

  it("Custom commands Kullanimi Valid", () => {
    cy.login("deneme@abc.com", "denemeParola");
  });
  it("Custom commands Kullanimi InValid", () => {
    cy.login("deneme@gmail.com", "denemeParola");
  });
});
