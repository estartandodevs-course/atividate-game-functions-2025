# Desafios de JavaScript

Este arquivo contém uma lista de exercícios práticos para treinar o uso de métodos de array em JavaScript. Todos os exercícios devem ser resolvidos utilizando a base de dados fornecida no arquivo `games_data.js`.

## 🎯 Objetivo

O objetivo é criar funções que manipulem e extraiam informações da base de dados, aplicando os métodos de array estudados, como `find`, `filter`, `map`, `reduce`, `sort`, e outros.

## 🚀 Como Começar

1.  **Crie os arquivos:** Certifique-se de que você tem o arquivo `dados.js` (com a base de dados em português) e crie um novo arquivo chamado `exercicios.js` na mesma pasta.
2.  **Importe os dados:** No topo do seu arquivo `exercicio.js`, adicione a seguinte linha para importar os dados:

    ```javascript
    const dados = require("../data/games_data");
    ```

3.  **Resolva os exercícios:** Crie uma função para cada exercício proposto abaixo dentro da pasta "exercicio". Teste suas funções usando `console.log()` para ver os resultados.

O objetivo é que você pratique as operações, seguindo a sequência dos exercícios abaixo.  
Ao final, você deve **enviar sua solução através de um Pull Request**.

---

## 📌 Passo a passo

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. **Acesse a pasta do projeto:**
   ```bash
   cd nome-do-repositorio
   ```
3. **Crie uma nova branch com seu nome:**
   ```bash
   git checkout -b minha-solucao
   ```
4. **Resolva os exercícios na pasta `exercicios/`.**
   - Crie um arquivo para cada exercício (ex: `exercicio1.js`, `exercicio2.js`, etc).
   - Utilize o **console.log** para exibir os resultados.
   - Recomendamos rodar o código com a extensão **Code Runner** no VS Code.
5. **Adicione suas alterações:**
   ```bash
   git add .
   ```
6. **Faça o commit com uma mensagem descritiva:**
   ```bash
   git commit -m "utilize commit semântico"
   ```
7. **Envie para o repositório remoto:**
   ```bash
   git push -u origin minha-solucao
   ```
8. **Abra um Pull Request (PR)** no GitHub para que sua solução seja revisada.

---

# Exercícios de JavaScript: Manipulação de Arrays com Dados de Games

---

## Lista de Exercícios

### Seção 1: Busca e Filtragem (`find`, `filter`, `includes`)

**1. Encontrar Jogo por Título**

- **Tarefa:** Crie uma função chamada `encontrarJogoPorTitulo(titulo)` que recebe o título de um jogo como parâmetro e retorna o objeto completo do jogo correspondente. Se o jogo não for encontrado, retorne `undefined`.
- **Método sugerido:** `find()`

**2. Listar Jogos de um Gênero Específico**

- **Tarefa:** Crie uma função `filtrarJogosPorGenero(idGenero)` que recebe um ID de gênero e retorna um array com todos os jogos que possuem esse gênero em sua lista `idsGeneros`.
- **Métodos sugeridos:** `filter()`, `includes()`

**3. Listar Jogos Multiplayer**

- **Tarefa:** Crie uma função `filtrarJogosMultiplayer()` que não recebe parâmetros e retorna um array contendo apenas os jogos que são multiplayer (`eMultiplayer: true`).
- **Método sugerido:** `filter()`

**4. Verificar Disponibilidade em Plataforma**

- **Tarefa:** Crie uma função `jogoDisponivelParaPC(titulo)` que recebe o título de um jogo e retorna `true` se ele estiver disponível para a plataforma 'PC', e `false` caso contrário.
- **Métodos sugeridos:** `find()`, `includes()`

### Seção 2: Mapeamento e Transformação (`map`)

**5. Criar Lista de Títulos de Jogos**

- **Tarefa:** Crie uma função `obterTitulosDeJogos()` que retorna um novo array contendo apenas os **títulos** de todos os jogos.
- **Método sugerido:** `map()`

**6. Formatar Lista de Jogos para Exibição**

- **Tarefa:** Crie uma função `formatarListaDeJogos()` que retorna um novo array de strings, onde cada string tem o formato: `"Título do Jogo (Ano de Lançamento)"`.
- **Exemplo de saída:** `['Final Fantasy VII Remake (2020)', 'Chrono Trigger (1995)', ...]`
- **Método sugerido:** `map()`

**7. Listar Jogos com Nota e Título**

- **Tarefa:** Crie uma função `listarJogosComNota()` que retorna um novo array de objetos, onde cada objeto contém apenas o `titulo` e a `notaMetacritic` do jogo.
- **Exemplo de saída:** `[{ titulo: 'Final Fantasy VII Remake', nota: 87 }, ...]`
- **Método sugerido:** `map()`

### Seção 3: Agregação e Ordenação (`reduce`, `sort`)

**8. Calcular a Média das Notas Metacritic**

- **Tarefa:** Crie uma função `calcularMediaMetacritic()` que calcula e retorna a média das notas de todos os jogos no array. O resultado deve ser um número.
- **Método sugerido:** `reduce()`

**9. Contar Jogos por Estúdio**

- **Tarefa:** Crie uma função `contarJogosPorEstudio()` que retorna um objeto. As chaves deste objeto devem ser os nomes dos estúdios e os valores devem ser a quantidade de jogos famosos listados para cada um.
- **Exemplo de saída:** `{ 'Square Enix': 2, 'Nintendo EPD': 2, ... }`
- **Métodos sugeridos:** `reduce()`, `forEach()`

**10. Ordenar Jogos por Ano de Lançamento**

- **Tarefa:** Crie uma função `ordenarJogosPorAno(ordem)` que recebe `'ASC'` ou `'DESC'` como parâmetro e retorna um novo array de jogos ordenados por `anoLancamento`. 'ASC' para do mais antigo para o mais novo, e 'DESC' para o contrário.
- **Métodos sugeridos:** `sort()`, `slice()` (para não modificar o array original)

**11. Ordenar Jogos por Nota (do maior para o menor)**

- **Tarefa:** Crie uma função `ordenarJogosPorNota()` que retorna um novo array de jogos ordenados pela `notaMetacritic` em ordem decrescente.
- **Métodos sugeridos:** `sort()`, `slice()`

### Seção 4: Métodos Diversos (`forEach`, `splice`, `push`, `pop`)

**12. Exibir Plataformas de Cada Jogo**

- **Tarefa:** Crie uma função `exibirPlataformas()` que utiliza `forEach` para percorrer a lista de jogos e imprimir no console uma mensagem para cada um, no formato: `"O jogo [TÍTULO] está disponível para: [PLATAFORMAS]"`. (As plataformas podem ser exibidas como um array ou uma string formatada).
- **Método sugerido:** `forEach()`

**13. Encontrar o Índice e Remover um Jogo**

- **Tarefa:** Crie uma função `removerJogoPorTitulo(titulo)` que recebe o título de um jogo, encontra seu índice no array `jogos`, e o remove usando `splice`. A função deve retornar o array modificado. (Cuidado: esta função modificará o array original!).
- **Métodos sugeridos:** `findIndex()` (ou `indexOf` com `map` antes) e `splice()`

**14. Adicionar um Novo Jogo no Início da Lista**

- **Tarefa:** Crie uma função `adicionarNovoJogo(jogo)` que recebe um objeto de jogo completo e o adiciona no **início** da lista de jogos. A função deve retornar o novo tamanho do array.
- **Método sugerido:** `unshift()`

**15. Desafio Final: Relatório Completo de Gênero**

- **Tarefa:** Crie uma função `gerarRelatorioDeGenero(idGenero)` que recebe o ID de um gênero e retorna um objeto com um relatório detalhado sobre ele.
- **O objeto retornado deve ter o seguinte formato:**
  ```javascript
  {
    genero: "Nome do Gênero", // Ex: "RPG"
    quantidadeDeJogos: 3,
    mediaDeNota: 90.67,
    jogoMaisBemAvaliado: "Título do jogo com maior nota",
    jogoMaisAntigo: "Título do jogo mais antigo"
  }
  ```
- **Dicas:**
  1.  Primeiro, use `filter()` para obter todos os jogos do gênero especificado.
  2.  Use o resultado do filtro para calcular a `quantidadeDeJogos`.
  3.  Use `reduce()` para somar as notas e depois calcular a `mediaDeNota`.
  4.  Use `sort()` (ou `reduce()`) para encontrar o `jogoMaisBemAvaliado` e o `jogoMaisAntigo`.
  5.  Use `find()` no array `generos` para obter o nome do gênero a partir do ID.
- **Métodos sugeridos:** `filter()`, `reduce()`, `sort()` (ou mais de um `reduce()`), `find()`.
