// cypress/e2e/search-error.cy.ts
describe('busca com erro mostra ErrorMessage', () => {
  it('mostra mensagem quando o Pokémon não existe', () => {
    // lista inicial
    cy.intercept('GET', '**/api/v2/pokemon?*', { fixture: 'pokemon-list.json' }).as('getList');

    cy.visit('/');
    cy.wait('@getList');

    cy.intercept('GET', '**/api/v2/pokemon/naoexiste*', {
      statusCode: 404,
      body: { detail: 'Not found' },
    }).as('getNotFound');

    cy.get('[data-testid="search-input"] input', { timeout: 10000 })
      .should('be.visible')
      .type('naoexiste{enter}');

    cy.wait('@getNotFound');

    cy.get('[data-testid="error-message"]', { timeout: 10000 })
      .should('be.visible')
      .contains(/pokémon não encontrado/i);
  });
});
