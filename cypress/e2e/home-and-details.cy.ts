describe('Home -> Details', () => {
  it('renderiza a lista e navega para o detalhe do Bulbasaur', () => {
    cy.intercept('GET', '**/api/v2/pokemon?*', { fixture: 'pokemon-list.json' }).as('getList');

    cy.intercept('GET', '**/api/v2/pokemon/1', { fixture: 'pokemon-1.json' }).as('getBulbasaur');
    cy.intercept('GET', '**/api/v2/pokemon-species/1', { fixture: 'species-1.json' }).as(
      'getSpecies1',
    );

    cy.intercept('GET', '**/api/v2/pokemon?*', { fixture: 'pokemon-list.json' }).as('getList');

    cy.intercept('GET', '**/api/v2/pokemon/bulbasaur*', { fixture: 'pokemon-1.json' }).as(
      'getBulbasaurByName',
    );
    cy.intercept('GET', '**/api/v2/pokemon/ivysaur*', { fixture: 'pokemon-2.json' }).as(
      'getIvysaurByName',
    );

    cy.intercept('GET', /\/api\/v2\/pokemon\/1\/?$/, { fixture: 'pokemon-1.json' }).as(
      'getBulbasaurById',
    );
    cy.intercept('GET', /\/api\/v2\/pokemon-species\/1\/?$/, { fixture: 'species-1.json' }).as(
      'getSpecies1',
    );
  });
});
