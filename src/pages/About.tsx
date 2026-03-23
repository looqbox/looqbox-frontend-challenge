import React from 'react';
import { Typography, Card, Row, Col } from 'antd'

const { Text, Title } = Typography

const techStack = [
  { name: 'React 18', icon: '⚛️', description: 'Biblioteca de UI com hooks' },
  { name: 'Typescript', icon: '🔷', description: 'Javascript com tipagem segura' },
  { name: 'React Router', icon: '🔀', description: 'Roteamento Client Side' },
  { name: 'Ant Desing', icon: '🐜', description: 'Biblioteca de componentes UI' },
  { name: 'Reacharts', icon: '📊', description: 'Gráficos para visualização de dados' },
  { name: 'Axios', icon: '🌐', description: 'Requisições HTTP' },
  { name: 'PokeAPI', icon: '🎮', description: 'API de pokemons' },
  { name: 'ESLint', icon: '🔍', description: 'Linting de código' },
]

const features = [
  '✅ SPA com React Router (sem recarregamento de página)',
  '✅ Barra de busca com suporte à tecla Enter',
  '✅ Lista de Pokémon com paginação',
  '✅ Página detalhada do Pokémon (/details/:name)',
  '✅ Gráfico radar de status (Recharts)',
  '✅ Barras de status com progresso visual',
  '✅ Alternância para Pokémon shiny',
  '✅ Tratamento de erros com mensagens amigáveis',
  '✅ TypeScript em toda a aplicação',
  '✅ ESLint configurado',
  '✅ Componentes do Ant Design',
  '✅ Testes unitários',
  '✅ Carregamento preguiçoso de imagens',
  '✅ Layout responsivo',
];


const About: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fc', padding: '40px 24px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span style={{ fontSize: 56 }}>⚡</span>
          <Title
            level={2}
            style={{
              display: 'block',
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 900,
              fontSize: 36,
              color: '#D32F2F',
              margin: '8px 0 4px'
            }}
          >
            Pokédex SPA
          </Title>
          <Text style={{ fontSize: '16', fontFamily: "'Nunito', sans-serif", color: '#777' }}>
            Projeto front-end utilizando React + PokeAPI
          </Text>
        </div>

        <Card
          style={{
            border: 'none',
            borderRadius: 20,
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            marginBottom: 24
          }}
          styles={{ body: { padding: 28 } }}
        >
          <Title level={4} style={{ fontFamily: "'Nunito', sans-serif", color: '#D32F2F' }}>
            📋 Features
          </Title>
          <Row gutter={[8, 8]}>
            {features.map((f) => (
              <Col key={f} xs={24} sm={12}>
                <Text style={{ fontSize: 14, fontFamily: "'Nunito', sans-serif" }}>
                  {f}
                </Text>
              </Col>
            ))}
          </Row>
        </Card>
        <Card style={{
          border: 'none',
          borderRadius: 20,
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
        }}>
          <Title level={4} style={{ fontFamily: "'Nunito', sans-serif", color: '#D32F2F' }}>
            🛠️ Tech Stack
          </Title>
          <Row gutter={[12, 12]} align="stretch">
            {techStack.map(({ name, icon, description }) => (
              <Col key={name} xs={24} sm={12} md={6} style={{ display: 'flex' }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  minHeight: 128,
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '14px 16px',
                  background: '#fff',
                  border: '1px solid #f0f0f0',
                  borderRadius: 14,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}
                >
                  <div style={{ fontSize: 24, marginBottom: 4 }}>{icon}</div>
                  <Text style={{ fontWeight: 800, display: 'block', fontFamily: "'Nunito', sans-serif" }}>{name}</Text>
                  <Text style={{ fontSize: 12, color: '#999', fontFamily: "'Nunito', sans-serif" }}>{description}</Text>
                </div>
              </Col>
            ))}
          </Row>
        </Card>

      </div>
    </div>
  )
}

export default About;