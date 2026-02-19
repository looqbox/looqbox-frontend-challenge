import React from 'react';
import { Card, Button, Typography } from 'antd';
import { ReloadOutlined, WarningFilled } from '@ant-design/icons';

const { Title, Text } = Typography;

interface ErrorStateProps {
  errorMsg: string;
  onRetry: () => void;
  isDarkMode: boolean;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ errorMsg, onRetry, isDarkMode }) => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '60px 0' }}
    >
      <Card
        bordered={false}
        style={{
          width: '100%',
          maxWidth: 500,
          textAlign: 'center',
          borderRadius: 8,
          background: isDarkMode ? '#1F1F1F' : '#FFF',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }}
      >
        <WarningFilled style={{ fontSize: 48, color: '#faad14', marginBottom: 24 }} />

        <Title level={3} style={{ marginBottom: 8, fontWeight: 600 }}>
          Something Went Wrong
        </Title>

        <Text
          style={{
            display: 'block',
            color: isDarkMode ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)',
            marginBottom: 24,
          }}
        >
          We couldn't connect to the PokeAPI. This might be a temporary issue.
        </Text>

        <div
          style={{
            background: isDarkMode ? '#2a1215' : '#fff1f0',
            border: '1px solid #ffa39e',
            borderRadius: 6,
            padding: '12px',
            marginBottom: 32,
            textAlign: 'left',
          }}
        >
          <Text code style={{ color: '#ff4d4f', fontSize: 12, wordBreak: 'break-all' }}>
            {errorMsg}
          </Text>
        </div>

        <Button
          type='primary'
          size='large'
          icon={<ReloadOutlined />}
          onClick={onRetry}
          style={{ borderRadius: 6, height: 44, padding: '0 32px' }}
        >
          Retry
        </Button>
      </Card>
    </div>
  );
};
