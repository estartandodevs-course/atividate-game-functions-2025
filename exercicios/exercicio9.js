const dados = require("../data/games_data");

function contarJogosPorEstudio() {
    return dados.estudios.reduce((resultado, estudio) => {
        resultado[estudio.nome] = (resultado[estudio.nome] || 0) + 1;
        return resultado;
    }, {});
}

console.log(contarJogosPorEstudio());
