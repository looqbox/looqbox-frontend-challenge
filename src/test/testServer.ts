import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

export const handlers = [
  http.get('https://pokeapi.co/api/v2/pokemon', () => {
    return HttpResponse.json({
      count: 1,
      results: [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }],
    });
  }),

  http.get('https://pokeapi.co/api/v2/pokemon/:id', ({ params }) => {
    if (params.id === '1') {
      return HttpResponse.json({
        id: 1,
        name: 'bulbasaur',
        height: 7,
        weight: 69,
      });
    }
    return HttpResponse.json({ detail: 'Not found' }, { status: 404 });
  }),
];

export const server = setupServer(...handlers);
