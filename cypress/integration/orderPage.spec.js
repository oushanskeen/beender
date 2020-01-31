context("The Order Page", ()=>{
      beforeEach(() => {
        cy.visit('http://localhost:3000/beender/order');
      });
      it('successfully loads', () => {
        cy.visit('http://localhost:3000/beender/order');
      });
      it('contains some welcome text', () => {
        cy.contains('You seem ready to order');
      });   
});
