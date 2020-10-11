

let cssLeaderLabel = '.col-lg-12 > .option-label'
let cssCloseButton = '#close_correct_modal_btn'
let cssStaticLabel = '#staticBackdropLabel'


function getClickCheck(cssSelector) {
    cy.get(cssSelector).click();
    console.log(cssSelector);
    if(cssStaticLabel == cssCloseButton) {
        cy.get(cssStaticLabel).should('have.text', 'That is correct!');
    }  
}



describe("vodafone test", () => {
    beforeEach(() => {
      cy.visit("https://responsivefight.herokuapp.com/");
    });
  
    it("e2e test", () => {
        var d = new Date();
        var timestamp = d.getTime();
        cy.get('#worrior_username')
        .type(" ")// + timestamp)
        
        var e2eSequence = 
            [
                '#warrior', 
                '#start', 
                '#bus', 
                '#bus_timer_start', 
                '#bus_answer_1', 
                '#close_correct_modal_btn',
                '#restaurant_timer_start',
                '#restaurant_answer_1',
                '#close_correct_modal_btn',
                '#start',
                '#office_answer_1',
                '#close_modal_btn_1',
                '#bus_timer_start',
                '#bus_answer_2',
                '#close_correct_modal_btn',
                '#restaurant_timer_start',
                '#restaurant_answer_2',
                '#close_correct_modal_btn',
                '#start',
                '#office_answer_1',
                '#close_modal_btn_1',
                '#bus_timer_start',
                '#bus_answer_1',
                '#close_correct_modal_btn',
                '#restaurant_timer_start',
                '#restaurant_answer_2',
                '#close_correct_modal_btn',
                '#start',
                '#office_answer_2',
                '#leaderboard_link',   
            ]

        e2eSequence.forEach(getClickCheck);

        cy.get(cssLeaderLabel).should('have.text', 'COVID-19 THE GAME - LEADERBOARD');

    });
  });