import enTrans from '../messages/en.json';
import ptTrans from '../messages/pt.json';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
	pt: { translation: ptTrans },
	en: { translation: enTrans },
};

export type LangProps = { value: keyof typeof resources; label: string; flag: string };

export const langs: LangProps[] = [
	{ value: 'pt', label: 'Português', flag: '🇧🇷' },
	{ value: 'en', label: 'English', flag: '🇺🇸' },
];

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		// debug: true,
		ns: ['translation', 'aiBigdata'],
		fallbackLng: 'en',
		detection: {
			order: ['localStorage', 'querystring', 'navigator'],
			caches: ['localstorage'],
		},
		interpolation: {
			escapeValue: false,
			prefix: '{',
			suffix: '}',
		},
		react: { useSuspense: false },
	});

export default i18n;
