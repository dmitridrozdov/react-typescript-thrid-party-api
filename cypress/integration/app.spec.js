describe("Converter  test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  let inputSelector = "input[type=number]";

  it("Check converter", () => {
    cy.get("h1")
      .should(($h1el) => {
        expect($h1el).to.be.visible;
        expect($h1el).to.have.text("Convert");
      })
      .get(inputSelector)
      .first()
      .type("2000")
      .get("#1")
      .select("AUD")
      .get("#2")
      .select("USD")
      .wait(500)
      .get(inputSelector)
      .eq(1) //DD: select second element
      .should(($resultInput) => {
        expect($resultInput).to.be.visible;
        const number = parseFloat($resultInput.val());
        console.log($resultInput);
        console.log(number);
        expect(number).to.be.lte(2000);
      });
  });

  it("Check weather", () => {
    cy.visit("http://localhost:3000/weather")
      .get(".search-bar")
      .type("Sydney{enter}")
      .get(".location")
      .should(($location) => {
        expect($location).to.contain("Sydney, AU");
      });
  });

  it("Check daily challenge", () => {
    cy.visit("http://localhost:3000/daily")
      .get("#inputlist")
      .type("7, 6, 5, 4, 3")
      .get("#expectedsum")
      .type("20")
      .get("button")
      .click();
  });

  it("Check email validation", () => {
    cy.visit("http://localhost:3000/validate")
      .get("#inputEmail")
      .type("hello")
      .get("#password")
      .click()
      .get("#validationSign")
      .should(($res) => {
        expect($res).to.be.visible;
      })
      .get("#validationDot")
      .should(($res) => {
        expect($res).to.be.visible;
      });
  });
});
