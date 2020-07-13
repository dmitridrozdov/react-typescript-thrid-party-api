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
      .get(inputSelector)
      .eq(1) //DD: select second element
      .should(($resultInput) => {
        // expect($resultInput).to.have.value("2000");
        expect($resultInput).to.be.visible;
        const number = parseFloat($resultInput.value);
        console.log($resultInput);
        // expect(number).to.be.lte(2000);
      });
  });
});
