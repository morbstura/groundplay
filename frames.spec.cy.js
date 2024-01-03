describe('template spec', () => {
    it('verify if frame has content', () => {
      cy.on('uncaught:exception', (err, runnable) => { 
      return false
      cy.visit('https://demoqa.com/frames')
      cy.get('#frame2')
      cy.contains('This is a sample page').should("exist")
         .then(($iframe)=>{
              const $body = $iframe.contents().find('body')
         })
        })

    cy.wrap($body)
      .find('sidebar').scrollTo('bottom')
       .find('sidebar').scrollTo('top')
         })
          
      it('verify that there is content in child frame',() => {
        cy.on('uncaught:exception', (err, runnable) => { 
            return false
            cy.visitn
            cy.get('#frame1')
            cy.contains('Child Iframe').should("exist")





      })
    })
})