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
                {
                    home:{message:"simple hello"},
                    gallery:[
                        {id:"1",status:'unknown'},
                        {id:"2",status:'unknown'},
                        {id:"3",status:'unknown'},
                        {id:"4",status:'unknown'},
                        {id:"5",status:'unknown'},
                        {id:"6",status:'unknown'},
                        {id:"7",status:'unknown'}
                    ],
                    choice:{isSelected:" "},
                    selection:{outcome:" "}   
                }
             )
      });
 
      it('contains some welcome text', () => {
        cy.contains('You are in a world of chosen cards');
      });
      
      it('displays only loved cards clickable id\'s', () => { 
        cy.visit('http://localhost:3000/beender/gallery');
       let love = [1,2,3,4,5,6,7];
       love.map(e => cy.get('#loveButton').click());
           cy.get('#gallery').contains('Goto Choice').click();
           cy.url().should('include', '/choice');  
      }); 
});
         

