# Pokédex

Sistema desenvolvido em **React + TypeScript**, com foco em boas práticas de arquitetura de front-end, componentização e consumo de API.  
A interface consome dados da [PokéAPI](https://pokeapi.co/) e permite **listar, buscar e visualizar detalhes de Pokémons**.

## Tecnologias e Ferramentas

- **React 19** com **TypeScript**
- **Redux** para gerenciamento de estado
- **React Router DOM** para navegação
- **Ant Design** para componentes de UI
- **Axios** para requisições HTTP
- **Jest + Testing Library** para testes
- **Prettier + ESLint** para padronização de código
- **PokéAPI** como fonte de dados

## Estrutura do Projeto

```text
src/
├── api/ # Comunicação com API (axios + endpoints)
├── components/ # Componentes reutilizáveis (Card, Tags, Stats etc.)
├── pages/ # Páginas principais (Home e Details)
├── store/ # Redux (slices + store)
├── types/ # Definições de tipos TypeScript
├── constants/ # Mapas de cores e constantes globais
```

## Como Rodar o Projeto

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash 
npm start
```

### Build de produção
```bash 
npm run build
```

### Testes
```bash
npm test
```

## Funcionalidades

### Home
- Lista de Pokémons com paginação
- Busca por nome (com fallback para lista inicial)
- Skeletons durante carregamento

### Detalhes
- Informações completas (imagem, tipos, habilidades, peso, altura, stats)
- Barras visuais para atributos
- Tratamento de erro (Pokémon inexistente)