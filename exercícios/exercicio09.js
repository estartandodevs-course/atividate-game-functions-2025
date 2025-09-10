const dados = require("../data/games_data.js");

const contarJogosPorEstudio = () => {
  return dados.estudios.reduce((objeto, estudio) => {
    let contador = 0;
    estudio.jogosFamosos.forEach(() => {
      contador++;
    });

    return {
      ...objeto,
      [estudio.nome]: contador, //eu poderia também ter usado estudio.jogosFamosos.length mas como foi sugestionado usar o forEach, está feito 🤘🏼
    };
  }, {});
};

console.log(contarJogosPorEstudio());
