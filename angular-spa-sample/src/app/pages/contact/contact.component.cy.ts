import { ContactComponent } from './contact.component'

describe('ContactComponent', () => {
    it('mounts', () => {
        cy.mount(ContactComponent);
        cy.get('h1').should('have.text', 'Contact');
        cy.get('[data-cy=input-realname]').type('Test');
        cy.get('[data-cy=input-email]').clear().type('test@test.com');
    });
});