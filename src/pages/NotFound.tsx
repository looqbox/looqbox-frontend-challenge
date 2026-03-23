import React from 'react'
import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Result
        status='404'
        title={<span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900 }}>404</span>}
        subTitle={<span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 18 }}>Essa págiga fugiu como um pokemon selvagem!</span>}
        extra={
          <Button
            type='primary'
            size='large'
            onClick={() => navigate('/home')}
            style={{
              background: 'linear-gradient(135deg, #EF5350, #FF7043)',
              border: 'none',
              borderRadius: 50,
              fontWeight: 700,
              fontFamily: "'Nunito', sans-serif"
            }}
          >
            Voltar para Home
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;