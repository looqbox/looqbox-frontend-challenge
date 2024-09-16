# Pokédex App

Este projeto é uma aplicação de **Pokédex** desenvolvida com **React**. A aplicação permite aos usuários ver, capturar e organizar os Pokémons disponíveis. Com três páginas principais, o usuário pode gerenciar sua Pokédex, pesquisar Pokémon e visualizar detalhes e estatísticas dos Pokémon capturados.

## Funcionalidades Principais

### 1. **Página Home**
   - Na **Home Page**, os usuários podem pesquisar qualquer Pokémon disponível.
   - O sistema de **paginação** facilita a navegação entre diferentes Pokémon.
   - Pesquise diretamente pelo nome do Pokémon desejado e visualize informações rápidas.
   
### 2. **Página Pokédex**
   - A **Pokédex** armazena todos os Pokémon capturados pelo usuário.
   - Pokémon capturados são salvos e persistidos no **LocalStorage**, garantindo que o progresso do usuário seja mantido, mesmo após recarregar a página ou fechar o navegador.
   - Os Pokémon na Pokédex podem ser organizados e gerenciados pelo usuário.

### 3. **Página de Detalhes do Pokémon**
   - Na **Página de Detalhes**, os usuários podem visualizar informações detalhadas sobre cada Pokémon, incluindo:
     - **Stats (estatísticas)**: HP, Ataque, Defesa, Velocidade e mais.
     - **Movimentos**: Veja uma lista dos principais movimentos de cada Pokémon.
     - **Imagens**: Visualize os Pokémon em diferentes ângulos e animações.
   - Design responsivo e estilizado, garantindo uma boa experiência em dispositivos móveis e desktops.

## Tecnologias Utilizadas

### **Frontend**
- **React**: Framework utilizado para criar a interface e o gerenciamento de componentes da aplicação.
- **Redux**: Utilizado para o gerenciamento de estado global, facilitando o controle e a manipulação dos dados dos Pokémon e da Pokédex.
- **Chakra UI**: Biblioteca de componentes de interface usada para estilização dos componentes e garantir acessibilidade e responsividade.
- **Styled Components**: Utilizado para a criação de estilos personalizados, mantendo o código CSS organizado e modularizado.

### **Dados e Persistência**
- **PokeAPI**: API externa utilizada para buscar informações detalhadas sobre os Pokémon.
- **LocalStorage**: O armazenamento local é usado para salvar a Pokédex do usuário, garantindo que seus Pokémon capturados sejam mantidos após fechar o navegador.
- **Redux**: Gerencia todo o estado da aplicação, como os Pokémon capturados, a lista de Pokémon disponíveis, e as informações detalhadas de cada Pokémon.

## Estrutura do Projeto

A aplicação é composta por três páginas principais:
1. **Home Page**: Exibe uma lista de Pokémon com opção de pesquisa e paginação.
2. **Pokédex**: Mostra os Pokémon capturados pelo usuário, permitindo organização e gerenciamento.
3. **Detalhes do Pokémon**: Exibe informações detalhadas sobre um Pokémon específico, incluindo estatísticas e movimentos.

### Componentização

A aplicação foi projetada de forma modular e organizada, com os principais componentes reutilizáveis, o que facilita a manutenção e expansão da aplicação. Os principais componentes incluem:
- **PokemonCard**: Componente que exibe informações básicas de cada Pokémon na listagem.
- **Modal**: Componente modal para interações rápidas, como confirmação de captura ou remoção de um Pokémon.
- **Header**: Cabeçalho comum em todas as páginas, com navegação entre a Home e a Pokédex.