describe("Temel Komutlar", () => {
  it("Temel Komutlar cy.visit Kullanimi", () => {
    // cy.visit("/") //baseUrl Tanimlandiysa
    // cy.visit("https://example.cypress.io/commands") //base url tanımlı değilse
    cy.visit({
      url: "https://example.cypress.io", //base url tanımlı değilse
      method: "GET",
    });
  });

  it("Temel Komutlar cy.title Kullanimi", () => {
    cy.title().should("eq", "cypress.io"); //title tam eşit olursa
    cy.title().should("include", "cypress.io"); //title içinde yazılan geçiyorsa doğrular
    cy.title().should("contain", "cypress.io"); //title içinde yazılan geçiyorsa doğrular
  });

  it("Temel Komutlar cy.url ve cy.location kullanimi", () => {
    cy.url().should("eq", "https://example.cypress.io/commands"); // url tam eşitlik olrusa doğrular
    cy.url().should("include", "/commands"); //url içinde yazılan geçiyorsa doğrular

    cy.location("pathname").should("eq", "/commands"); // gidilen path doğrulamış oluyoruz.
    cy.location("protocol").should("eq", "https"); // gidilen protocolü doğrular
    cy.location("hostname").should("eq", "https://example.cypress.io"); // tam eşitlikte doğrular
    cy.location("hostname").should("include", "example.cypress.io"); // içerirse doğrular
  });

  it("Temel Kmoutlar cy.get Kullanimi", () => {
    cy.get("#button");
    cy.get("#button").as("deneme");
    cy.get('a[href="example.cypress.io"]');
    cy.get("div.button");
    cy.get("ul li:first");
  });

  it("Temel Komutlar log Kullanımı", () => {
    cy.log("Temel komut cy.log Kullanımı"); // consol.log ile aynı
  });
});
