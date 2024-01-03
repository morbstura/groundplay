describe('custom command test', () => {
  it('should pass login', () => {
    cy.login('morbstura@yahoo.com', 'Heilige1#')
    cy.contains('My account').should("exist")
  })
})