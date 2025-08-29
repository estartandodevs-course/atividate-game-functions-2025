const dados = require("../data/games_data");
// console.log(dados.jogos);

// 15. Desafio Final: Relatório Completo de Gênero

function gerarRelatorioDeGenero(idGenero)
{
   const jogosDoGenero = dados.jogos.filter(jogo => jogo.idsGeneros.includes(idGenero))
   const quantidadeDeJogos = jogosDoGenero.length;
   const somaDasNotas = jogosDoGenero.reduce((acc, jogo) => acc + jogo.nota, 0);
   const mediaDasNotas = somaDasNotas / quantidadeDeJogos;

//  const jogoMaisBemAvaliado = jogosDoGenero.slice().sort((a, b) => b.nota - a.nota)[0].titulo
   const jogoMaisBemAvaliado = jogosDoGenero.reduce((acc, jogo) => acc.nota > jogo.nota ? acc : jogo).titulo
        
   const jogoMaisAntigo = jogosDoGenero.slice().sort((a, b) => a.anoLancamento - b.anoLancamento)[0].titulo
   const generoNome = dados.generos.find(genero => genero.id === idGenero).nome;

   return{
    genero:generoNome,
    quantidadeDeJogos:quantidadeDeJogos,
    mediaDeNota:mediaDasNotas,
    jogoMaisBemAvaliado: jogoMaisBemAvaliado,
    jogoMaisAntigo: jogoMaisAntigo
   }
}
console.log(gerarRelatorioDeGenero("533bebf3-6bbe-41d8-9cdf-46f7d13b62ae"));
console.log(gerarRelatorioDeGenero("0938aa23-f153-4937-9f88-4858b24d6bce"));