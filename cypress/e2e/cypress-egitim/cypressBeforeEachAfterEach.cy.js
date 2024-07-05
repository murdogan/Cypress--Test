describe("Before After Kullanimi", () => {
  beforeEach(() => {
    cy.log("Before after Kullanımı");
    cy.visit("https://automationexercise.com/");
  });
  afterEach(() => {
    cy.log("After Each Kullanımı için örnek");
  });

  it("Başlığı Doğrula", () => {
    cy.title().should("eq", "Automation Exercise");
  });
  it("url Doğrula", () => {
    cy.url().should("eq", "https://automationexercise.com/");
  });
  it("hostname Doğrula", () => {
    cy.location("hostname").should("include", "automation");
  });
});
