describe("Shadow ve Find Kullanimi", () => {
  before(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  it("Shadow ve Find Kullanimina Ornek test ", () => {
    cy.visit("https://www.mercedes-benz.co.uk/passengercars.html");

    cy.get('cmm-cookie-banner[settings-id="fph8XBqir"]')
      .shadow()
      .find('cmm-buttons-wrapper[class="hydrated"]')
      .find('[data-test="handle-accept-all-button"]')
      .contains("Agree to all")
      .click();
  });
});
