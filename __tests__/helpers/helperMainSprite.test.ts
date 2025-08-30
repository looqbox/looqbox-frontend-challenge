import { getMainSprite } from 'helpers/helperMainSprite';

describe('getMainSprite', () => {
	it('retorna a url correta do sprite oficial', () => {
		expect(getMainSprite('https://pokeapi.co/api/v2/pokemon/1/')).toBe(
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
		);
		expect(getMainSprite('https://pokeapi.co/api/v2/pokemon/25/')).toBe(
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
		);
	});

	it('retorna string vazia se url inválida', () => {
		expect(getMainSprite('')).toBe('');
	});
});
