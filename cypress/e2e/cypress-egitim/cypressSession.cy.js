describe("Cypress Session Kullanımı", () => {
  beforeEach(() => {
    const username = "deneme31@deneme.com";
    const password = "deneme";
    cy.loginWithSession(username, password);
  });
  it("Siteye gir", () => {
    cy.visit("https://react-redux.realworld.io/");
    cy.get("nav > div > ul > li:nth-child(2) > a").click();
    cy.get('input[placeholder="Article Title"]').type("Deneme Bir Ders");
    cy.get("input[placeholder = 'What's this article about?']").type(
      "Udemy Cypress Dersleri"
    );
    cy.get("input[placeholder = 'Write your article (in markdown)']").type(
      "sıfırdan ileri seviye"
    );
    cy.get("input[placeholder = 'Enter tags']").type("cypress");
    cy.contains("Publish Article").click();
    cy.contains("Edit Article").should("be.visible");
  });
  it("Global Feeds e git", () => {
    cy.visit("https://react-redux.realworld.io/");
    cy.get("div.feed-toogle > ul > li:nth-child(2) > a").click();
    cy.get("div:nth-child(1)> a > h1 ")
      .should("be.visible")
      .and("contain", "Deneme Bir Ders");
  });
});
