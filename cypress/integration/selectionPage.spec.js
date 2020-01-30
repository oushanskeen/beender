context("The Selected Page", ()=>{
      it('successfully loads', () => {
        cy.visit('http://localhost:3000/beender/choice/:1');
      });
      it('contains some welcome text', () => {
        cy.contains('You are in a world of your selections');
      });    
});
