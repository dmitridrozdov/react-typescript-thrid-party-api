describe("CBA  test", () => {
  beforeEach(() => {
    cy.visit("https://www.commbank.com.au/");
  });

  it("Check internal serach", () => {
    cy.get("a > .icon-search")
      .click()
      .get("#header-search-input-box")
      .type("travel")
      .should("have.class", "header-search-input")
      .should(($input_search) => {
        expect($input_search).to.be.visible;
        expect($input_search).to.have.class("header-search-input");
        expect($input_search).to.have.value("travel");
        expect($input_search).to.have.attr("placeholder", "Start typing...");
        expect($input_search).to.have.attr("type", "search");
      });
  });
});
