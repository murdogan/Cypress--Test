describe("Back Forward Kullanimi", () => {
  it("cypress.io sayfasina gidip tarayicida ileri geri komutlarini deneme", () => {
    cy.visit("https://www.cypress.io");

    cy.get("nav> div > ul > li:nth-child(5) > a").click();

    cy.title().should(
      "eq",
      "Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing"
    );
    // cy.go("back");
    cy.go(-1);
    cy.title().should(
      "eq",
      "Testing Frameworks for Javascript | Write, Run, Debug | Cypress"
    );
    //cy.go("forward");
    cy.go(1);
    cy.title().should(
      "eq",
      "Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing"
    );
  });
});
