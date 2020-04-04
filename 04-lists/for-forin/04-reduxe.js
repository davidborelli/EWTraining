const { loadPeople } = require("./service");

Array.prototype.meuReduce = function(callback, valorInicial) {
  let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0];

  for (let index = 0; index <= this.length - 1; index++) {
    valorFinal = callback(valorFinal, this[index], this);
  }

  return valorFinal;
};

const main = async () => {
  try {
    const { results } = await loadPeople("a");
    const pesos = results.map(item => parseInt(item.height));

    // const total = pesos.reduce((anterior, proximo) => {
    //   return anterior + proximo;
    // }, 0);

    // Concatenando valores
    // const total = pesos.meuReduce((anterior, proximo) => {
    //   return anterior + proximo;
    // }, 0);

    // Concatenar array (Reduzir array)
    const minhaLista = [
      ["David", "Borelli"],
      ["Facebook", "LinkedIn"]
    ];

    const total = minhaLista
      .meuReduce((anterior, proximo) => {
        return [...anterior, ...proximo];
      }, [])
      .join(", ");

    console.log(total);
  } catch (error) {
    console.error("Deu erro...", error);
  }
};

main();
