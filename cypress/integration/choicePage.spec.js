context("The Choice Page", ()=>{
    beforeEach(()=> {
      cy.visit('http://localhost:3000/beender/choice', {
        onBeforeLoad (win) {
          cy.spy(win.console, 'log').as('consoleLog')
        }
      });
    });

      it('successfully loads', () => {
        cy.visit('http://localhost:3000/beender/choice');
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
 
      it('contains some welcome text', () => {
        cy.contains('You are in a world of chosen cards');
      });
      
      it('displays only loved cards clickable id\'s', () => { 
        cy.visit('http://localhost:3000/beender/gallery');
       let love = [1,2,3];
       let hate = [1,2,3,4];
       love.map(e => cy.get('#loveButton').click());
       hate.map(e => cy.get('#hateButton').click());
           cy.get('#gallery').contains('Goto Choice').click();
           cy.url().should('include', '/choice');
           love.map(e => cy.get('#choice').contains(e));
           cy.get('#choice').contains('1').click();      
      }); 
});
         

