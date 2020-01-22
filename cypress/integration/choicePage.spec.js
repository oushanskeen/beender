context("The Choice Page", ()=>{
    beforeEach(()=> {
      cy.visit('http://localhost:3000/choice', {
        onBeforeLoad (win) {
          cy.spy(win.console, 'log').as('consoleLog')
        }
      });
    });

      it('successfully loads', () => {
        cy.visit('http://localhost:3000/choice');
      }); 
      it('contains some welcome text', () => {
        cy.contains('You are in a world of chosen cards');
      });
      
      it('displays only loved cards clickable id\'s', () => { 
        cy.visit('http://localhost:3000/gallery');
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
         

