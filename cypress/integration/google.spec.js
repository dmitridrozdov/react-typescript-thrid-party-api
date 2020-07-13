describe("Google search test", () => {
  it("Search BigCommerce and check result", () => {
    cy.visit("www.google.com")
      .get(".gLFyf")
      .type("BigCommerce")
      .get("#hplogo")
      .should("have.attr", "alt", "Google")
      .click()
      .get(".FPdoLc > center > .gNO89b")
      .click()
      .get(".sA5rQ")
      .should(($link) => {
        expect($link).to.contain("BigCommerce® Official Site");
      });
  });
});
