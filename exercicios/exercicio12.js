const dados = require("../data/games_data");
function exibirPlataformas() {
    dados.jogos.forEach((jogo) => {
        console.log(`O jogo "${jogo.titulo}" está disponível para: ${jogo.plataformas.join(", ")}`);
    });
}

exibirPlataformas();