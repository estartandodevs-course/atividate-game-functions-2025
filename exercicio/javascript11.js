const dados = require("../data/games_data");
// console.log(dados.jogos);

// 11. Ordenar Jogos por Nota (do maior para o menor)

function ordenarJogosPorNota()
{
    return dados.jogos.slice().sort((a, b) =>
    {
        return b.nota - a.nota;
    });
}
console.log(ordenarJogosPorNota());