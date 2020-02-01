context("The Gallery Page",()=>{
    beforeEach(()=> {
      cy.visit('http://localhost:3000/beender/gallery', {
        onBeforeLoad (win) {
          cy.spy(win.console, 'log').as('consoleLog')
        }
      });     
    });
    
    it('successfully loads', () => { 
      cy.visit('http://localhost:3000/beender/gallery');
    });
    
    it('has expected state on load', () => 
         { cy.window()
             .its('store')
             .invoke('getState')
             .should('deep.equal', 
                    {
                        gallery:[
                            {id:"1",status:'unknown'},
                            {id:"2",status:'unknown'},
                            {id:"3",status:'unknown'},
                            {id:"4",status:'unknown'},
                            {id:"5",status:'unknown'},
                            {id:"6",status:'unknown'},
                            {id:"7",status:'unknown'}
                        ],
                        choice:{isSelected: " "},
                        selection:{outcome:" "}
                    }
                
             )
      });
    it('contains some welcome text', () => {
      cy.contains('You are in the Gallery');
    });
    it('contains block of two buttons, image in between and counter below', () => {      
      cy.get('#hateButton').contains('Hate');
      cy.get('#beerPic').contains('1 : unknown');
      cy.get('#loveButton').contains('Love');
      cy.get('#beerPicLog').contains('+ - - - - - -');
    });
    it('Hate button emits "Hate" action', () => {
      cy.get('#hateButton').click();
      cy.get('@consoleLog').should('be.calledWith',{type: "HATE", id: "1"})
    });
    it('Love button emits "Love" action', () => {
      cy.get('#loveButton').click();
      cy.get('@consoleLog').should('be.calledWith',{type: "LOVE", id: "1"})
    });
    it('can do a bit at the end',()=>{
        let array = [1,2,3,4,5,6,7];
          array.map(e => cy.get('#loveButton').click());
        it('when you rich the end of the gallery, you see the "Goto Choice"', () => {      
          cy.get('#gallery').contains('Goto Choice');
        });
        it('when you click "Goto Choice" you go to choice page', () => {      
          cy.get('#gallery').contains('Goto Choice').click(); 
          cy.url().should('include', '/choice');
        });
    });    
});
