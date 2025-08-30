import i18n, { LangProps, langs } from '@/i18n';

/**
 * Get languages labels from languages codes
 * @param languages Languages codes array
 * @returns Languages with labels array
 */
export const getLanguages = (languages?: string[]): LangProps[] =>
	languages
		? languages.map(
				(code) =>
					langs.find(({ value }) => value === code) ?? { value: code as LangProps['value'], label: code, flag: '' }
			)
		: [];

/**
 * Change app language, update i18n and localStorage
 * @param lang language code (e.g. 'en', 'pt')
 */
export function changeLanguage(lang: string): void {
	if (i18n.language === lang) return;
	i18n.changeLanguage(lang);
	localStorage.setItem('i18nextLng', lang);
}
