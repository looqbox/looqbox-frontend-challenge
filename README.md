# Pokedex React

Para executar:
-
    1) ```git clone https://https://github.com/Andrei-Araujo/Pokedex-React.git```
    2) ```npm i```
    3) ```npm start```
  
  
# Pokédex
O projeto tem por objetivo mostrar uma forma prática de cinsulta a dados base de determinados Pokémons, utilizando a API PokéAPI para consulta dos dados. 

A documentação da API utilizada pode ser conferida em https://pokeapi.co .

# Interface para consulta

Neste projeto, é possível consultar dados de duas principais maneiras.
## Consulta local
Ao selecionar uma das opções da galeria fixa de pokémons sugeridos, utilizou-se o acesso a dados locais, armazenados em formato ```.json```.

## Consulta remota
Ao pesquisar por um pokémon via barra de pesquisa, o parâmetro utilizado (nome ou ID) é repassado para  se obter as informações sobre o pokémon desejado. 

Analogamente, com o modo aleatório de seleção, é escolhido um Pokémon de modo randomizado (a partir de seu ID) no banco de dados remoto.

# Observações

Atualmente, a API utilizada permite a consulta de pokémon apenas pelos nomes presentes no idioma inglês. Para seleção via nomes em outros idiomas, deve-se implementar um banco de dados local para tradução do nome entre inglês e os demais idiomas.

