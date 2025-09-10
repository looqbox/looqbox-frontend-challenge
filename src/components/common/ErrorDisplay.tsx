import React from 'react';
import { Button, Result } from 'antd';
import { useTranslation } from 'react-i18next';

interface ErrorDisplayProps {
    error: string | null;
    onRetry: () => void;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error, onRetry }) => {
    const { t } = useTranslation();

    return (
        <Result
            status="error"
            title={t('common.errorTitle')}
            subTitle={error}
            extra={
                <Button type="primary" onClick={onRetry}>
                    {t('common.tryAgain')}
                </Button>
            }
        />
    );
};