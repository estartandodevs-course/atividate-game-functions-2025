const dados = require("../data/games_data");

function encontrarJogoPorTitulo(titulo) {
  return dados.jogos.find((jogo) => jogo.titulo === titulo);
}

const jogo = encontrarJogoPorTitulo("Super Mario Odyssey");
if(jogo === undefined)
{
    console.log("Jogo não encontrado");
}
else
{
    console.log(jogo);
}