const dados = require("../data/games_data");

function gerarRelatorioDeGenero(idGenero) {
    const jogosDoGenero = dados.jogos.filter((jogo) => jogo.idsGeneros.includes(idGenero));
    const quantidadeDeJogos = jogosDoGenero.length;
    const somaDasNotas = jogosDoGenero.reduce((soma, jogo) => soma + jogo.nota, 0);
    const mediaDeNota = quantidadeDeJogos > 0 ? somaDasNotas / quantidadeDeJogos : 0;
    const jogoMaisBemAvaliado = jogosDoGenero.reduce((melhor, jogo) => (jogo.nota > melhor.nota ? jogo : melhor), { nota: -1 }).titulo;
    const jogoMaisAntigo = jogosDoGenero.reduce((maisAntigo, jogo) => (jogo.anoLancamento < maisAntigo.anoLancamento ? jogo : maisAntigo), jogosDoGenero[0]).titulo;
    const nomeDoGenero = dados.generos.find((genero) => genero.id === idGenero)?.nome || "Gênero não encontrado";
    return {
        genero: nomeDoGenero,
        quantidadeDeJogos,
        mediaDeNota: parseFloat(mediaDeNota.toFixed(2)),
        jogoMaisBemAvaliado,
        jogoMaisAntigo,
    };
}

const idGenero = "533bebf3-6bbe-41d8-9cdf-46f7d13b62ae";
const relatorio = gerarRelatorioDeGenero(idGenero);
console.log(relatorio);