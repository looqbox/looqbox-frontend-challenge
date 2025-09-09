import React from 'react';
import { Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange: MenuProps['onClick'] = ({ key }) => {
        i18n.changeLanguage(key);
    };

    const items: MenuProps['items'] = [
        {
            key: 'pt-BR',
            label: '🇧🇷 Português',
        },
        {
            key: 'en',
            label: '🇺🇸 English',
        },
    ];

    return (
        <Dropdown menu={{ items, onClick: handleLanguageChange }}>
            <Button icon={<GlobalOutlined />} type="text" style={{ color: 'inherit' }}>
                {i18n.language.startsWith('pt') ? 'PT-BR' : 'EN'}
            </Button>
        </Dropdown>
    );
};