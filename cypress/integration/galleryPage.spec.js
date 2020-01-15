context("The Gallery Page",()=>{
    beforeEach(()=> {
      cy.visit('http://localhost:3000/gallery', {
        onBeforeLoad (win) {
          cy.spy(win.console, 'log').as('consoleLog')
        }
      });     
    });

    it('successfully loads', () => { 
      cy.visit('http://localhost:3000/gallery');
    });
    it('contains some text', () => {
      cy.contains('You are in the Gallery');
    });
    it('contains counter with block with two button and image in between', () => {      
      //cy.get('#eval').contains(1);
      cy.get('#hateButton').contains('Hate');
      cy.get('#beerPic[alt="beerPic"]')//.contains('alt', 'beerPic');
      cy.get('#loveButton').contains('Love');
      cy.get('#beerPicLog').contains('+ - - - - - -');
      //cy.log('#counter'.outerHTML);
    });
    
    it('has expected state on load', () => 
         { cy.window()
             .its('store')
             .invoke('getState')
             .should('deep.equal', 
                {gallery:[
                    {id:"1",status:'unknown'},
                    {id:"2",status:'unknown'},
                    {id:"3",status:'unknown'},
                    {id:"4",status:'unknown'},
                    {id:"5",status:'unknown'},
                    {id:"6",status:'unknown'},
                    {id:"7",status:'unknown'}
                ]}
             )
    });
    
});
