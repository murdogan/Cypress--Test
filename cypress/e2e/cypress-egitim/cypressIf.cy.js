describe("Cypress If Kullanimi", () => {
  it("IF kullanimina ornek", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.get("#userNamee")
      .if("visible")
      .type("deneme bir isim")
      .then(() => {
        cy.get("#userEmail").type("deneme@abc.com");
      })
      .else()
      .then(() => {
        cy.get("#currentAddress")
          .should("be.visible")
          .type("deneme bir adres girilsin");
      })
      .finally()
      .log("cypress if kullanımı başarılı");
  });
});
