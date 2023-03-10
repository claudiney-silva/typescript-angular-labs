describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200')
    cy.get('[routerlink=about]').click();
    cy.get('h1').should('have.text', 'About');
  })
})
