import React, { useState } from 'react';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';

interface SearchBarProps {
    onSearch: (value: string) => void;
    loading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, loading }) => {
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (value: string) => {
        onSearch(value.trim().toLowerCase());
    };

    return (
        <Input.Search
            placeholder={t('home.searchPlaceholder')}
            enterButton
            size="large"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onSearch={handleSearch}
            loading={loading}
            style={{ marginBottom: 24 }}
        />
    );
};