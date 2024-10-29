# Explicação:
- const: É usada para declarar uma constante, ou seja, uma variável que não vai mudar de valor. No caso, tempData é um array (uma lista) de objetos, e cada objeto representa um filme.
- Array ([...]): Em JavaScript, um array é uma estrutura que armazena vários valores, nesse caso, estamos armazenando os filmes.
- Objetos ({...}): Cada filme é representado como um objeto. Um objeto em JavaScript é uma coleção de propriedades (chaves e valores). 

Por exemplo:
- title: "Guardians of the Galaxy Vol. 2" é uma propriedade de texto que representa o título do filme.
- year: 2017 é o ano de lançamento.
- director: "James Gunn" é o diretor do filme.
- genre: ["Action", "Adventure", "Comedy"] é um array com os gêneros do filme.
- poster: Uma URL da imagem do pôster do filme.
- link: O link que leva para mais informações sobre o filme.
# Resumo: tempData é uma lista de filmes, onde cada filme tem várias informações como título, ano, diretor, etc.

# Explicação:
- document: É um objeto que representa a página HTML que você está vendo no navegador.
getElementById("movies-container"): Esta função busca um elemento HTML que tenha o ID "movies-container". Esse ID foi definido no HTML assim:

# Explicação:
- forEach(): Essa função é usada para percorrer todos os itens em um array. No nosso caso, ela vai passar por cada filme dentro do array tempData.
- movie: Cada item do array tempData é um filme, e vamos chamá-lo de movie dentro da função. Em cada iteração, movie será um dos filmes.
# Resumo: Essa parte do código significa "para cada filme em tempData, execute o código dentro do bloco {...}".

