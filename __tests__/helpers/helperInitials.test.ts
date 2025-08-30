import { getInitials } from 'helpers/helperInitials';

describe('getInitials', () => {
	it('retorna as iniciais do primeiro e último nome', () => {
		expect(getInitials('John Doe')).toBe('JD');
		expect(getInitials('Maria da Silva')).toBe('MS');
		expect(getInitials('Ana Maria Souza')).toBe('AS');
	});

	it('retorna a inicial maiúscula se só houver um nome', () => {
		expect(getInitials('pikachu')).toBe('P');
	});

	it('ignora espaços extras', () => {
		expect(getInitials('  John   Doe  ')).toBe('JD');
	});

	it('retorna string vazia se vazio', () => {
		expect(getInitials('')).toBe('');
	});
});
