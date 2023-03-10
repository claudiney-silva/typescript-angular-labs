describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200')
    cy.get('[routerlink=contact]').click();

    cy.get('h1').should('have.text', 'Contact');
    
    cy.get('[data-cy=input-realname]').type('Test');
    cy.get('[data-cy=input-email]').clear().type('test@test.com');
    cy.get('[data-cy=p-realname]').should('have.text', 'Name: Test');
    cy.get('[data-cy=p-email]').should('have.text', 'E-mail: test@test.com');
    
    cy.get('[data-cy=button-send]').click();
    cy.get('[data-cy=input-realname]').should('have.text', '');
    cy.get('[data-cy=input-email]').should('have.text', '');
    cy.get('[data-cy=p-realname]').should('have.text', 'Name: ');
    cy.get('[data-cy=p-email]').should('have.text', 'E-mail: ');
  })
})
