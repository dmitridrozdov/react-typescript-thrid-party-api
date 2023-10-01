let cssLeaderLabel = '.col-lg-12 > .option-label'
let cssCloseButton = '#close_correct_modal_btn'
let cssStart = '#start'
let cssBusStart = '#bus_timer_start'


function checkBasedOnCSSSelector(cssSelector) {
    switch(cssSelector) {
        case cssCloseButton:
            cy.get(cssCloseButton).should('have.text', 'Try the next battle');
          break;
        case cssBusStart:
            cy.get(cssBusStart).should('have.text', 'Start');
          break;
        default:
      }
}

function getClickCheck(cssSelector) {
    checkBasedOnCSSSelector(cssSelector);
    cy.get(cssSelector).click();
    console.log(cssSelector);
}



describe("vodafone test", () => {
    beforeEach(() => {
      cy.visit("https://responsivefight.herokuapp.com/");
    });
  
    it("e2e test", () => {
        var d = new Date();
        var timestamp = d.getTime();

        var date = new Date();

        weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var dateString = weekdayNames[date.getDay()] + " " 
            + date.getHours() + ":" + ("00" + date.getMinutes()).slice(-2) + " " 
            + date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear();

        cy.get('#worrior_username')
        .type("LEO MESSI THE BEST QA " + dateString)
        
        var e2eSequence = 
            [
                '#warrior', 
                cssStart, 
                '#bus', 
                cssBusStart, 
                '#bus_answer_1', 
                cssCloseButton,
                '#restaurant_timer_start',
                '#restaurant_answer_1',
                cssCloseButton,
                cssStart,
                '#office_answer_1',
                '#close_modal_btn_1',
                cssBusStart,
                '#bus_answer_2',
                cssCloseButton,
                '#restaurant_timer_start',
                '#restaurant_answer_2',
                cssCloseButton,
                cssStart,
                '#office_answer_1',
                '#close_modal_btn_1',
                cssBusStart,
                '#bus_answer_1',
                cssCloseButton,
                '#restaurant_timer_start',
                '#restaurant_answer_2',
                cssCloseButton,
                cssStart,
                '#office_answer_2',
                '#leaderboard_link',   
            ]

        e2eSequence.forEach(getClickCheck);

        cy.get(cssLeaderLabel).should('have.text', 'COVID-19 THE GAME - LEADERBOARD');

    });
  });