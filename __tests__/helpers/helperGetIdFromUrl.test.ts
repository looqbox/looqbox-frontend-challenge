import { getIdFromUrl } from 'helpers/helperGetIdFromUrl';

describe('getIdFromUrl', () => {
	it('extrai o id corretamente de uma url de pokemon', () => {
		expect(getIdFromUrl('https://pokeapi.co/api/v2/pokemon/1/')).toBe('1');
		expect(getIdFromUrl('https://pokeapi.co/api/v2/ability/150/')).toBe('150');
		expect(getIdFromUrl('https://pokeapi.co/api/v2/item/999/')).toBe('999');
	});

	it('retorna string vazia se não houver id', () => {
		expect(getIdFromUrl('https://pokeapi.co/api/v2/pokemon/')).toBe('pokemon');
		expect(getIdFromUrl('')).toBe('');
	});
});
