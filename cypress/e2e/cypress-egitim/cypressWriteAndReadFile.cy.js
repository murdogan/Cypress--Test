describe("Cypress write File kullanımı", () => {
  it("Write File", () => {
    cy.writeFile(
      "CypressWriteFileDoc/exampleFile.txt",
      "Sifirdan cypress derslerine hoş geldiniz. \n"
    );
    cy.writeFile(
      "CypressWriteFileDoc/exampleFile.txt",
      "Bu eğitim Seviyesinde sıfırdan ileri seviye cypress öğreneceksiniz.",
      { flag: "a+" }
    );
  });
});

describe("Cypress Read File kullanımı", () => {
  it("Read File", () => {
    cy.readFile("CypressWriteFileDoc/exampleFile.txt").should(
      "contain",
      "cypress"
    );
  });
});
