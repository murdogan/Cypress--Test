describe("Before After Kullanimi", () => {
  before(() => {
    cy.log("Before after Kullanımı");
    cy.visit("https://automationexercise.com/");
  });
  after(() => {
    cy.log("After Kullanımı için örnek");
  });

  it("Başlığı Doğrula", () => {
    cy.title().should("eq", "Automation Exercise");
  });
});
