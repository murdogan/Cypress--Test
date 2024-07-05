describe("Alias, Then, Each, Wrap", () => {
  it("Kullanım Örnekleri", () => {
    let itemlenght;

    cy.visit("https://shopist.io/");

    cy.get(".navbar-section a").as("NavbarMenus"); //Alias ornek

    cy.get("@NavbarMenus")
      .then(($el) => {
        itemlenght = $el.length;
      })
      .each(($el) => {
        cy.get("@NavbarMenus").should("be.visible");

        cy.log($el.text());

        if ($el.text().includes("Bedding")) {
          cy.wrap($el).click();
        }
      });
  });
});
