const dados = require("../data/games_data");
// console.log(dados.jogos);

// 9. Contar Jogos por Estúdio
function contarJogosPorEstudio()
{
    return dados.estudios.reduce((acc, estudio) =>
    {
     acc[estudio.nome] = estudio.jogosFamosos.length
     return acc
    }, {})
}

console.log(contarJogosPorEstudio())