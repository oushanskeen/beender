const initState = {  
    home:{message:"simple hello"},
    gallery:[
      {
        id:"1",
        status:'unknown',
        eval:
        {
            "welcome": "grapes",
            "post-effect": "tears",
            "song": "Billy Eilish - When the party is over"
        },
        description:
        `Polly's Brew:
         A Ritzy Experience.
         India Pale Ale at 7% hopped with Ekuanot, 
         more Ekuanot, and even more Ekuanot. If you like
         Ekuanot, then step right up. It’s fresh off the 
         canning line and ready to drink!`
      },
      {
        id:"2",
        status:'unknown',
        eval:
        {
            "welcome": "Jam",
            "post-effect": "Royal Dreams",
            "song": "Marina and the diamonds - Blue"
        },
        description:
        `To Øl:
         Garden of Sweden.
         Inspired by the legendary Swedish jam
         "Drottningsylt" (Queens Jam), this IPA is rich on 
         Blueberry & Raspberries but also loaded with Mosaic  
         hops.`
      },
      {
        id:"3",
        status:'unknown',
        eval:
        {
            "welcome": "mosaic",
            "post-effect": "bit separated",
            "song": "Glass Heroes - You let me down"
        },
        description:
        `To Øl:
         House Of Pale.
         House Of pale is one of the recipes we’ve taken from 
         our beloved mad laboratory in Copenhagen, BRUS. A New 
         England Pale ale with Mosaic and Simcoe. It’s seen many
         changes and tweaks over this year, experimenting with hop
         doses and overall ‘crispiness’ - and now we’re pretty
         sure we’ve got exactly what we’ve been looking for. `
      },
      {
        id:"4",
        status:'unknown',
        eval:
        {
            "welcome": "farm flows",
            "post-effect": "grass & mold",
            "song": "Keep Off the grass - Your Neighbour"
        },
        description:
        `To Øl:
         Lupulin Levels.
         8.2% DIPA, made in collaboration with Crosby and 
         Indie Hop Farms. Utilizing El Dorado, Cascade and 2019
         Strata that was hand shipped straight from harvest to
         our brewery!` 
      },
      {
        id:"5",
        status:'unknown',
        eval:
        {
            "welcome": "squirrel fairytales",
            "post-effect": "squirrel dreams",
            "song": "Alvin & The Chip Monks - Squeakuel" 
        },
        description:
        `Omnipollo:
         Bianca Double PBJ Lassi Gose.
         Peanut butter and jelly Gose, brewed with rock salt,
         lactose, peanut butter, strawberry and raspberry jam.
         Clash of titans.`
      },
      {
        id:"6",
        status:'unknown',
        eval:
        {
            "welcome": "heavy sweat",
            "post-effect": "sinking in a deep",
            "song": "Sade - By your side"
        },
        description:
        `To Øl:
         Snowball.
         Enough heavy dark obnoxious sweet super malty x-mas and
         winter beers. When you eat heavy duck with fat gravy,
         the last thing you want is another heavy sweet malt
         liquor!
         NO! you want something that can help you sink the
         dinner, ease you stomach and cleanse your throat. And
         that is exactly what Snowball Saison will do. It is a
         SUPER sparkling crisp and dry Saison that has been
         refermented with brettanomyces and dry hopped over and
         over to give the beer a crisp and smooth tart
         finish (not to mention.... there is a lot of hops of
         course...).Have a nice winter!`
      },
      {
        id:"7",
        status:'unknown',
        eval:
        {
            "welcome": "questions",
            "post-effect": "more questions",
            "song": "Anya Marina - Whatever You Like" 
        },
        description:
        `Gamma:
         What We Make.
         9% Double IPA brewed in collaboration between Gamma and
         To Øl, called “What We Make”. It is brewed with lots of
         oats and wheat and it’s hopped with large amounts of
         Columbus, Mosaic, and Galaxy.`
      },
    ],
    choice:{isSelected: " "},
    selection:{outcome:" "}
};

context("The Gallery Page",()=>{
    beforeEach(()=> {
      cy.visit('http://localhost:3000/beender/gallery', {
        onBeforeLoad (win) {
          cy.spy(win.console, 'log').as('consoleLog')
        }
      });     
    });
    
    it('successfully loads', () => { 
      cy.visit('http://localhost:3000/beender/gallery');
    });
    
    it('has expected state on load', () => 
         { cy.window()
             .its('store')
             .invoke('getState')
             .should('deep.equal', 
                    initState
             )
      });
    it('contains some welcome text', () => {
      cy.contains('SELECT THE BEER!');
    });
    it('contains image, counter and  block of two buttons', () => {
      cy.get('#beerPic');  
      cy.get('#beerPicLog').contains('+ - - - - - -');    
      cy.get('#hateButton').contains('Hate');
      cy.get('#loveButton').contains('Love');
    });
    it('Hate button emits "Hate" action', () => {
      cy.get('#hateButton').click();
      cy.get('@consoleLog').should('be.calledWith',{type: "HATE", id: "1"})
    });
    it('Love button emits "Love" action', () => {
      cy.get('#loveButton').click();
      cy.get('@consoleLog').should('be.calledWith',{type: "LOVE", id: "1"})
    });
    it('can do a bit at the end',()=>{
        let array = [1,2,3,4,5,6,7];
          array.map(e => cy.get('#loveButton').click());
        it('when you rich the end of the gallery, you see the "Goto Choice"', () => {      
          cy.get('#gallery').contains('Goto Choice');
        });
        it('when you click "Goto Choice" you go to choice page', () => {      
          cy.get('#gallery').contains('Goto Choice').click(); 
          cy.url().should('include', '/choice');
        });
    });    
});
