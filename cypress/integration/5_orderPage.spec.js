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
      it('contains paragraph with the face beer card', () => {
        cy.get("#beerOrder").contains('Pardon, you chose nothing');
      });
      it('contains button to come back home', () => {
        cy.get('#homeButton').contains('HOME').click();
        cy.url().should('include', '/beender');
      });    
});
