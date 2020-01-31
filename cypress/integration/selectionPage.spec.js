context("The Selected Page", ()=>{
      beforeEach(() => {
        cy.visit('http://localhost:3000/beender/choice/:1');
      });
      it('successfully loads', () => {
        cy.visit('http://localhost:3000/beender/choice/:1');
      });
      it('contains some welcome text', () => {
        cy.contains('You are in a world of your selections');
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
      it('contains params from request', () => {
        cy.get('#selectedCard').contains('1');
      });     
});
