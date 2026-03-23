import React from 'react'
import { Result, Button } from 'antd'

interface ErrorMesageProps {
  message: string
  onRetry: () => void
}

const ErrorMessage: React.FC<ErrorMesageProps> = ({ message, onRetry }) => {
  return (
    <Result
      status="error"
      title="Ocorreu um erro"
      subTitle={message}
      extra={
        <Button
          type="primary"
          onClick={onRetry}
          style={{
            background: 'linear-gradient(135deg, #EF5350, #FF7043)',
            border: 'none',
            borderRadius: 40,
            fontWeight: 600,
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          Tente novamente
        </Button>}
    />
  )
}

export default ErrorMessage;