describe("CBA  test", () => {
    beforeEach(() => {
      cy.visit("https://responsivefight.herokuapp.com/");
    });
  
    it("login uer", () => {
        cy.get('#worrior_username')
        // .click()
        // .get("#header-search-input-box")
        .type("CYPRESS SUPER TEST___________________________")
        .get('#warrior')
        .click()
        .get('#start')
        .click()
        // .should("have.class", "header-search-input")
        // .should(($input_search) => {
        //   expect($input_search).to.be.visible;
        //   expect($input_search).to.have.class("header-search-input");
        //   expect($input_search).to.have.value("travel");
        //   expect($input_search).to.have.attr("placeholder", "Start typing...");
        //   expect($input_search).to.have.attr("type", "search");
        // });
    });
  });