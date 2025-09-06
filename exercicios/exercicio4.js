const dados = require("../data/games_data");

function jogoDisponivelParaPC(titulo) {
    const jogo = dados.jogos.find((jogo) => jogo.titulo === titulo);
    if (jogo) {
        return jogo.plataformas.includes("PC");
    }
    return false;
}

const titulo = "Final Fantasy VII Remake";
const disponivelParaPC = jogoDisponivelParaPC(titulo);

if (disponivelParaPC) {
    console.log(`O jogo "${titulo}" está disponível para PC.`);
} else {
    console.log(`O jogo "${titulo}" não está disponível para PC.`);
}
