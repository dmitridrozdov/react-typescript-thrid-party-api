describe("MarketPlace regression test", () => {

    let cssLogin = '#loginForm-Email'
    let cssPassword = '#loginForm-Password'
    let cssLoginButton = '.primary-legacy'
    let cssSearchField = '#headerSearch'
    let cssSearch = '.autocomplete-searchButton > .iconAct-Search'
    let cssPrimaryLoginBtn = '.coreHeader-profile > .coreHeader-loginText'
    let cssProductDescr = '.shelfProductTile-descriptionLink'

    // let login = 'ddrozdov@woolworths.com.au'
    let login = 'dm.drozdov@gmail.com'
    let password = "SashaRybka2013";
    let product1 = '1073741832'

    function enterText(css, text) { cy.get(css).type(text) }
    function clickElement(css) { cy.get(css).click() }
    function checkText(css, text) {
      cy.get(css)
      .should(($description) => {
        expect($description).to.contain(text);
      });
    }

    function loginToAccount(yLogin, yPassword) {
      // clickElement(cssPrimaryLoginBtn)
      enterText(cssLogin, yLogin)
      enterText(cssPassword, yPassword)
      clickElement(cssLoginButton)
    }
  
    it("login to account", () => {
      // cy.visit("https://uatsite.woolworths.com.au/")
      cy.visit("https://www.woolworths.com.au/shop/securelogin")
      loginToAccount(login, password)
    });

    // it("Search for the product and verify", () => {
    //   enterText(cssSearchField, product1)
    //   clickElement(cssSearch)
    //   checkText(cssProductDescr, 'Al Sadiq Generic Each')
    // })
});