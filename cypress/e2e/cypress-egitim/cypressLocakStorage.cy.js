describe("Cypress Local Storage", () => {
  it("", () => {
    cy.visit("https://www.qrcode-monkey.com/").then(() => {
      cy.log(localStorage.length);

      localStorage.setItem("cypress dersleri için", "deneme test");

      cy.wait(2000).then(() => {
        localStorage.removeItem("cypress dersleri için", "deneme test");

        cy.wait(2000).then(() => localStorage.clear());
      });
    });
  });
});
