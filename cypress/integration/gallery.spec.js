context("The Gallery Page",()=>{
    beforeEach(()=> {
      cy.visit('http://localhost:3000/gallery', {
        onBeforeLoad (win) {
          cy.spy(win.console, 'log').as('consoleLog')
        }
      });     
    });

    it('successfully loads', () => { 
      cy.visit('http://localhost:3000/gallery');
    });  

    it('contains some text', () => {
      cy.contains('You are in the gallery Gallery');
    });
    
    it('contains counter with image.id', () => {      
      cy.get('#counter').contains(1);
      cy.log('#counter'.outerHTML);
    });
    it('Love button emits "Love" action', () => {
      cy.get('button').contains('Love').click();
      cy.get('@consoleLog').should('be.calledWith',[1,'Love'])
    });
    it('Hate button emits "Hate" action', () => {
      cy.get('button').contains('Hate').click();
      cy.get('@consoleLog').should('be.calledWith', [1,'Hate'])
    });
    it('Buttons increase id\'s #', () => {
      cy.get('button').contains('Hate').click();
      cy.get('@consoleLog').should('be.calledWith', [1,'Hate']);
      cy.get('button').contains('Love').click();
      cy.get('@consoleLog').should('be.calledWith', [2,'Love'])
    });
    it('when you rich the end of the gallery, you see the FINISH', () => {      
      let array = [1,2,3,4,5,6,7];
      array.map(e => cy.get('button').contains('Hate').click()/*.log('hate')*/);
      cy.get('#gallery').contains('FINISH');
    });
    it('shows signs for images with emphasys on current image', () => {      
      cy.get('#currentPos').contains('+ - - - - - - ');
    });
    it('shows required peace of state', () => {      
      cy.get('#stateLog').contains('1 : unknown');
    });
    it('has expected state on load', () => 
         { cy.window()
             .its('store')
             .invoke('getState')
             //.log('store')
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
    it('is updated by the DOM actions', () => {
          cy.contains('button', 'Love').click()
          //cy.contains('.filters a', 'Completed').click()
          cy.window()
            .its('store')
            .invoke('getState')
            //.log('store')
            .should('deep.equal', 
               {gallery:[
                   {id:"1",status:'Love'},
                   {id:"2",status:'unknown'},
                   {id:"3",status:'unknown'},
                   {id:"4",status:'unknown'},
                   {id:"5",status:'unknown'},
                   {id:"6",status:'unknown'},
                   {id:"7",status:'unknown'}
               ]}
            );
    });
});
