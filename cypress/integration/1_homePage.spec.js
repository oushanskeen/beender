context("The Home Page", ()=>{
    beforeEach(()=> {
      cy.visit('http://localhost:3000/beender');
    });

      it('successfully loads', () => {
        cy.visit('http://localhost:3000/beender');
      }); 
      it('contains some welcome text', () => {
        cy.contains("This lil app aimed to help you navigating in our fancy beer forest.");
      });
      it('contains link to a gallery', () => {
        cy.contains('GO TO GALLERY');
      });
      it('successfully loads gallery page', () => {
        cy.contains('GO TO GALLERY').click();
        cy.url().should('include', '/gallery');
      });    
});
