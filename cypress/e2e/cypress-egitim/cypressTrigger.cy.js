describe("Trigger Kullanımı", () => {
  it("Mouseover Kullanimi", () => {
    cy.visit("https://www.amazon.de/");
    cy.get("span#nav-link-accountList-nav-line-1").trigger("mouseover");
    cy.get(
      "div[id='nav-flyout-ya-signin'] span[class='nav-action-inner']"
    ).click();
  });
});
