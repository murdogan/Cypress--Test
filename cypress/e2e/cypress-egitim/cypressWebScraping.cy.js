describe("web scrapping", () => {
  it("write file to txt for products", () => {
    cy.step("shopist sandalyelere gidiyor.");
    cy.visit("https://shopist.io/department/chairs");

    cy.step("Description class içindeki verilerin uzunluğu");
    cy.get(".description").as("chairsPrice").its("length").should("eq", 9);

    const results = [];
    cy.step("sonuçları log luyoruz");
    cy.get("@chairsPrice")
      .each(($el, index) => {
        cy.log("Results: " + index + "- " + $el.text());
        results.push($el.text());
      })
      .then(() => {
        cy.step("sonuçları txt dosyasına yazdırıyoruz.");
        cy.writeFile("CypressWriteFileDoc/chairsPrice.txt", results);
      });
  });
});
