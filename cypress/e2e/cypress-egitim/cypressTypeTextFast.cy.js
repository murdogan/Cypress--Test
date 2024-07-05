describe("Hızlı text yazılımı ", () => {
  it("Hizli text yazimi testi", () => {
    cy.visit("https://automationexercise.com/contact_us");
    cy.get("#message").type(
      "If you have any suggestion areas or improvements, do let us know. We will definitely work on it.If you have any suggestion areas or improvements, do let us know. We will definitely work on it."
    );
  });
  it("Hizli text yazimi testi2", () => {
    cy.visit("https://automationexercise.com/contact_us");
    cy.get("#message").type(
      "If you have any suggestion areas or improvements, do let us know. We will definitely work on it.If you have any suggestion areas or improvements, do let us know. We will definitely work on it.",
      { delay: 0 }
    );
  });
});
