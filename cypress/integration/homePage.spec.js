context("The Home Page", ()=>{
    beforeEach(()=> {
      cy.visit('http://localhost:3000');
    });

      it('successfully loads', () => {
        cy.visit('http://localhost:3000');
      });     
});
