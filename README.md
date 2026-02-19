# Desafio Looqbox - Pokémon SPA

Uma Single Page Application desenvolvida com ReactJS que consome a API pública PokeAPI para listar e detalhar Pokémons, incluindo visualização de estatísticas e cache de requisições com Redux.

## Tecnologias Utilizadas

- ReactJS
- TypeScript
- Redux Toolkit
- React Router
- Recharts (gráficos)

## Arquitetura

O projeto segue uma estrutura baseada em Feature First, separando responsabilidades por domínio:

```
src/
├── app/
│ ├── store.ts
│ ├── hooks.ts
│ └── providers/
├── features/
│ └── pokemon/
│ ├── components/
│ ├── pages/
│ ├── pokemonSlice.ts
│ └── pokemonService.ts
├── routes/
```

- Princípios aplicados:
- Separação de responsabilidades
- Centralização de estado global com Redux
- Cache de requisições
- Persistência com Redux Persist
- Componentização reutilizável

### Instalação

Clone o repositório:

```
git clone https://github.com/M2Monteiro/looqbox-frontend-challenge.git
```

Instale as dependências:

```
npm install
```

Execute o projeto:

```
npm run dev
```

### Funcionalidades

- Listagem inicial de Pokémons
- Busca por nome
- Página de detalhes
- Cache de requisições
- Persistência do estado
- Gráfico de estatísticas
- Tratamento de erro
- Loading states
- Rotas dinâmicas

### Decisões Técnicas

- Uso de Redux Toolkit para centralizar estado
- Cache manual para evitar requisições desnecessárias à API
- Persistência do cache para melhorar performance
- Organização por features para escalabilidade
- Testes unitários para garantir estabilidade

#### Melhorias Futuras

- Paginação completa
- Comparação entre Pokémons
- Dashboard analítico avançado
- E2E com Playwright
- Deploy com CI/CD

#### Autor

Matheus Monteiro