# LooqDex — Pokédex SPA

SPA criada como desafio técnico, inspirada no design da [Looqbox](https://looqbox.com/).

## ✨ Funcionalidades

- Busca de Pokémon por nome (Enter executa a pesquisa)
- Lista inicial de Pokémon com **paginação**
- Detalhes do Pokémon (tipos, habilidades, imagem oficial e gráfico de stats)
- Favoritar/Desfavoritar Pokémon (Redux slice)
- Interface em **Ant Design** customizado (tema dark + gradiente inspirado no Looqbox)
- Consumo da **PokeAPI** com RTK Query
- Tratamento de erros e estados de carregamento
- Testes com Vitest + Testing Library

## 🧱 Stack

- React 18 + TypeScript
- Redux Toolkit (RTK + RTK Query)
- React Router v6
- Ant Design v5
- Recharts (gráficos)
- Vite (dev server & build)
- Vitest + Testing Library
- ESLint + Prettier

## 🚀 Como rodar

```bash
# Instale as dependências
npm install

# Rodar ambiente de desenvolvimento
npm run dev

# Rodar testes
npm run test

# Build para produção
npm run build
```

Abra `http://localhost:5173` no navegador (ou a porta indicada pelo Vite).

## 🧭 Rotas

- `/` → Home com busca e lista paginada
- `/pokemon/:name` → Detalhes do Pokémon selecionado

## 🧪 Testes

Exemplo de teste com Vitest + Testing Library:

```tsx
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import { BrowserRouter } from "react-router-dom";
import Home from "../Home";
import { describe, it, expect } from "vitest";

describe("Home", () => {
  it("renderiza hero corretamente", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText(/Inteligência para sua Pokédex/i)).toBeInTheDocument();
  });
});
```

## ✅ Checklist do desafio

- [x] SPA com React
- [x] Busca que substitui lista ao Enter
- [x] Lista inicial pré-carregada
- [x] Clique no card abre detalhes
- [x] Pelo menos duas rotas
- [x] Uso de Ant Design
- [x] Paginação
- [x] Gráfico de stats
- [x] Redux (favoritos + RTK Query)
- [x] Testes iniciais
- [x] README documentado

---

Feito com React, Redux Toolkit e Ant Design.
