context("The Gallery Page",()=>{
    beforeEach(()=> {
      cy.visit('http://localhost:3000/gallery', {
        onBeforeLoad (win) {
          cy.spy(win.console, 'log').as('consoleLog')
        }
      });     
    });
    
    it('has expected state on load', () => 
         { cy.window()
             .its('store')
             .invoke('getState')
             .should('deep.equal', 
                {gallery:[
                    {id:"1",status:'unknown'}
                ]}
             )
    });
});
