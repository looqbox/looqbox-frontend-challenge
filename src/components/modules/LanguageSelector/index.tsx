import { Select } from '@/components/ui';
import { changeLanguage } from '@/helpers';
import { langs } from '@/i18n';
import { FC, HTMLAttributes, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export interface LanguageSelectorProps extends HTMLAttributes<HTMLDivElement> {}

const LanguageSelector: FC<LanguageSelectorProps> = () => {
	const { i18n } = useTranslation();

	const handleValueChange = useCallback((lang: string) => {
		changeLanguage(lang);
	}, []);

	const selectedLang = useMemo(() => langs.find((l) => l.value === i18n.language) ?? { flag: '🌐' }, [i18n.language]);

	return (
		<Select.Root value={i18n.language} onValueChange={handleValueChange}>
			<Select.Trigger className='w-full font-emoji'>
				<Select.Value>{selectedLang.flag}</Select.Value>
			</Select.Trigger>
			<Select.Content>
				{langs.map(({ value, flag }) => (
					<Select.Item key={value} value={value}>
						{flag}
					</Select.Item>
				))}
			</Select.Content>
		</Select.Root>
	);
};

LanguageSelector.displayName = 'LanguageSelector';

export default LanguageSelector;
