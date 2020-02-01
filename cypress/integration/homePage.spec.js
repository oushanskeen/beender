context("The Home Page", ()=>{
    beforeEach(()=> {
      cy.visit('http://localhost:3000/beender');
    });

      it('successfully loads', () => {
        cy.visit('http://localhost:3000/beender');
      }); 
      it('contains some welcome text', () => {
        cy.contains('Some welcome text about where you are');
      });
      it('contains link to a gallery', () => {
        cy.contains('Goto Gallery');
      });
      it('successfully loads gallery page', () => {
        cy.contains('Goto Gallery').click();
        cy.url().should('include', '/gallery');
      });    
});
