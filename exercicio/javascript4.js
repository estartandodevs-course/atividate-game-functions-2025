const dados = require("../data/games_data");
// console.log(dados.jogos);

// 4. Verificar Disponibilidade em Plataforma
function jogoDisponivelParaPc(titulo)
{
    return !!dados.jogos.find(jogo => jogo.plataformas.includes("PC") && jogo.titulo === titulo);
    // return dados.jogos.some(jogo => jogo.plataformas.includes("PC") && jogo.titulo === titulo);
}
const outraPlataforma = jogoDisponivelParaPc("Super Mario Odyssey")
if(outraPlataforma === false)
{
    console.log("Jogo não disponível para PC");
} 
else
{
    console.log("Jogo disponível para PC");
}
