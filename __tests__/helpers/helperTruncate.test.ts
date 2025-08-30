import { truncateText } from 'helpers/helperTruncate';

describe('truncateText', () => {
	it('trunca texto maior que o limite', () => {
		expect(truncateText('pikachu é um pokémon elétrico', 10)).toBe('pikachu é...');
	});

	it('retorna o texto original se menor ou igual ao limite', () => {
		expect(truncateText('pikachu', 10)).toBe('pikachu');
	});

	it('trunca e remove espaços extras no final', () => {
		expect(truncateText('pikachu    ', 7)).toBe('pikachu');
	});
});
