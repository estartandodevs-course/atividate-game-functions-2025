const dados = require("../data/games_data");
// console.log(dados.jogos);

// 10. Ordenar Jogos por Ano de Lançamento

function ordenarJogosPorAno(ordem)
{
    return dados.jogos.slice().sort((a, b) =>
    {
        if (ordem === "ASC")
        {
            return a.anoLancamento - b.anoLancamento;
        }
        else if (ordem === "DESC")
        {
            return b.anoLancamento - a.anoLancamento;
        }
    })
}
// console.log(ordenarJogosPorAno("ASC"));
console.log(ordenarJogosPorAno("DESC"));