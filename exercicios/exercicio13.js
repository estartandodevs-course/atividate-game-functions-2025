const dados = require("../data/games_data");

function removerJogoPorTitulo(titulo) {
    const index = dados.jogos.findIndex((jogo) => jogo.titulo === titulo);
    if (index !== -1) {
        dados.jogos.splice(index, 1);
    }
    return dados.jogos;
}

const tituloParaRemover = "The Legend of Zelda: Breath of the Wild";
const jogosAtualizados = removerJogoPorTitulo(tituloParaRemover);
console.log(jogosAtualizados); 

const jogoRemovido = dados.jogos.find((jogo) => jogo.titulo === tituloParaRemover);
if (!jogoRemovido) {
    console.log(`O jogo "${tituloParaRemover}" foi removido com sucesso.`);
} else {
    console.log(`O jogo "${tituloParaRemover}" ainda está na lista.`);
}