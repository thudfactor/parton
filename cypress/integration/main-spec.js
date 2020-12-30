describe('Basic tests', () => {
  before(() => {
    cy.visit('http://localhost:8080')
  })

  it('Should be able to navigate to the skip navigation', () => {
    cy.get('[data-cy=skip-link]').should('have.css', 'height').and('match', /1px/)
    cy.get('[data-cy=skip-link]').focus().should('have.css', 'top').and('match', /0/)
  })
})
