const dados = require("../data/games_data");

function ordenarJogosPorNota() {
    const jogosOrdenados = dados.jogos.slice();
    jogosOrdenados.sort((a, b) => b.nota - a.nota);
    return jogosOrdenados;
}

const jogosOrdenados = ordenarJogosPorNota();
console.log("Jogos ordenados por nota (do maior para o menor):", jogosOrdenados);