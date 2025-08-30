import { changeLanguage, getLanguages } from 'helpers/helperLanguages';

describe('getLanguages', () => {
	it('retorna array de objetos com label e value', () => {
		const result = getLanguages(['en', 'pt']);
		expect(result.some((l) => l.value === 'en')).toBe(true);
		expect(result.some((l) => l.value === 'pt')).toBe(true);
	});

	it('retorna array vazio se não passar nada', () => {
		expect(getLanguages()).toEqual([]);
	});
});

describe('changeLanguage', () => {
	it('altera o idioma e salva no localStorage', () => {
		const setItemSpy = jest.spyOn(window.localStorage.__proto__, 'setItem');
		const i18n = require('@/i18n').default;
		i18n.changeLanguage = jest.fn();
		i18n.language = 'en';
		changeLanguage('pt');
		expect(i18n.changeLanguage).toHaveBeenCalledWith('pt');
		expect(setItemSpy).toHaveBeenCalledWith('i18nextLng', 'pt');
		setItemSpy.mockRestore();
	});
});
