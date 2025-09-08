# 🎮 Lootbox Frontend Challenge - Pokédex

Uma aplicação frontend que consome a [PokéAPI](https://pokeapi.co/) para exibir uma **listagem de Pokémons**, permitir **buscas inteligentes** e mostrar a **comparação detalhada entre dois Pokémons** com direito a gráficos interativos.

[Veja o vídeo do app](/src/assets/players/apresentacao.mp4)

## 🚀 Funcionalidades

- **Listagem de Pokémons**
  - Carrega **50 pokémons por vez** com botão _"Carregar mais"_.
  - Header com **campo de busca**:
    - Pesquisa em cima dos dados já carregados.
    - Pesquisa diretamente na API e adiciona os resultados à listagem.

- **Detalhes do Pokémon**
  - Ao clicar em um card, abre a página de detalhes.
  - Mostra:
    - Tipos do Pokémon.
    - Estatísticas base (ataque, defesa, velocidade etc.).
    - Altura e peso.

- **Comparação de Pokémons**
  - Botão para selecionar outro Pokémon para comparar.
  - Exibição lado a lado dos dois cards.
  - **Gráfico radar interativo** para comparar atributos (ataque, defesa etc.).

---

## 🛠️ Tecnologias

Esse projeto foi criado com **Vite + React + TypeScript** e utiliza:

- [**Ant Design**](https://ant.design/) - UI Components.
- [**Ant Design Icons**](https://ant.design/components/icon/) - Ícones.
- [**TailwindCSS**](https://tailwindcss.com/) - Estilização responsiva.
- [**TanStack React Query**](https://tanstack.com/query/latest) - Gerenciamento de estado assíncrono e cache de requisições.
- [**Axios**](https://axios-http.com/) - Cliente HTTP.
- [**Zustand**](https://zustand-demo.pmnd.rs/) - Gerenciamento de estado global.
- [**React Router DOM**](https://reactrouter.com/) - Rotas da aplicação.
- [**Recharts**](https://recharts.org/) - Gráficos (usado no radar de comparação).

---

## 📂 Estrutura de Pastas

```bash
src/
 ├── assets/              # Imagens e arquivos estáticos
 ├── components/          # Componentes reutilizáveis
 ├── hooks/               # Hooks customizados
 │   ├── models/          # Hooks personalizados - models do MVVM
 │   ├── queries/         # Lógica de busca (API via React Query)
 │   ├── device.ts        # Hook para detectar dispositivo
 │   ├── debounce.ts      # Hook de debounce
 │   └── image-pokemon.ts # Utilidades relacionadas a imagens
 ├── lib/                 # Configurações globais (axios, query client)
 ├── models/              # Agrupamento de constantes, tipagens e stores globais
 │   ├── consts/          # Constantes (ex: cores por tipo)
 │   ├── types/           # Tipagens (TS)
 │   │   ├── view/        # Contrato de MVVM (TS)
 │   │   └── .ts          # Tipagens (TS)
 │   └── zustand/         # Store global
 ├── pages/               # Views principais (Home, Details etc.)
 ├── providers/           # Providers globais (React Query, Zustand etc.)
 ├── routes/              # Configuração das rotas
 ├── services/            # Serviços externos (API, integração)
 ├── styles/              # Estilos globais
 ├── tests/               # Testes com Vitest
 ├── views/               # Views MVVM
 ├── App.tsx              # App principal
 └── main.tsx             # Entry point
```

## 🧪 Testes

O projeto possui uma pasta tests/ na raiz onde ficam os testes unitários dos hooks, stores e componentes.

- 🛠️ Bibliotecas usadas para testes

  Vitest
  – Framework de testes unitários moderno para Vite.

  @testing-library/react
  – Facilita testar componentes React de forma próxima à interação real do usuário.

  @testing-library/react-hooks
  – Permite testar hooks isoladamente.

  jsdom
  – Simula o DOM no Node.js para testes de componentes React.

- 🚀 Rodando os testes

```bash
# Rodar todos os testes uma vez
pnpm test

# Rodar em modo watch (recarrega ao salvar alterações)
pnpm test:watch

```

Scripts disponíveis no package.json:

---

## ⚙️ Como rodar o projeto

1. Clonar repositório

```bash
  git clone https://github.com/luizgsv/lootbox-frontend-challenge.git
  cd lootbox-frontend-challenge
```

2. Instalar dependências

```bash
  pnpm install
  # ou npm install
  # ou yarn install
```

3. Configurar variáveis de ambiente
   Crie um arquivo .env na raiz e adicione:

```bash
  VITE_API_URL=https://pokeapi.co/api/v2
```

4. Rodar em desenvolvimento

```bash
  pnpm dev
```

5. Build para produção

```bash
  pnpm build
```

6. Preview do build

```bash
  pnpm preview
```

## 📸 Screenshots

## 📐 Arquitetura (MVVM)

O projeto segue o padrão MVVM (Model–View–ViewModel), que organiza a aplicação em três camadas principais:

- Model: Responsável pela lógica de dados: definição de estruturas (tipos), regras de negócio, stores globais e constantes.

  Exemplo: models/types/, models/consts/, models/zustand/.

- View: Camada de interface com o usuário. Só se preocupa em exibir dados e reagir a interações.

  Exemplo: páginas em pages/ e visões/componentes em views/ e components/.

- ViewModel: Faz a ponte entre Model e View. É onde fica a lógica de apresentação: buscar dados na API, transformar informação, manipular estado e entregar já pronto para a View renderizar.

  Exemplo: hooks/ (queries com React Query, Zustand e outros hooks customizados).

🔗 Essa separação ajuda a manter o código modular, testável e de fácil manutenção, evitando que a View (UI) se confunda com a lógica de negócio.

## 👨‍💻Autor

Desenvolvido por [Luiz Gustavo](https://www.linkedin.com/in/luiz-vargas/).
