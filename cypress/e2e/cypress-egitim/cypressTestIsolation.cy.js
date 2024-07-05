describe("Cypress Test Isolation", { testIsolation: false }, () => {
  it('Dosya Yükleme - 1" ', () => {
    cy.visit("https://www.qrcode-monkey.com/");
    cy.get("div:nth-child(3) > div.pane-header > h3").click();
    cy.get(".logo-preview").attachFile(
      { filePath: "photo.jpg" },
      { subjectType: "drag-n-drop" }
    );
  });

  it('Dosya Yükleme - 2" ', () => {
    const fileName = "izo.jpg";
    cy.fixture("izo.jpg")
      .then(Cypress.Blob.base64StringToBlob)
      .then((fileContent) => {
        cy.get(".logo-preview").attachFile(
          { fileContent, fileName, mimeType: "image/**" },
          { subjectType: "drag-n-drop" }
        );
      });
  });
});
