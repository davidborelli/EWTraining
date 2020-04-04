const { deepEqual, ok } = require("assert");

const database = require("./database");

const DEFAULT_ITEM_CADASTRAR = {
  id: 1,
  nome: "Flash",
  poder: "Speed"
};

/*
  No JS ao inves de utilizar array[0], podemos utilizar da seguinte forma:
  [array] = ira pegar primeira posicao
  [array1, array2] = ira pegar primeira e segunda posicao, e assim por diante
*/

describe("Suite de manipulacao de Herois", function() {
  it("Deve pesquisar um heroi usando arquivos", async function() {
    const expected = DEFAULT_ITEM_CADASTRAR;
    const [resultado] = await database.listar(expected.id);

    deepEqual(resultado, expected);
  });

  // it("Deve cadastrar um heroi, usando arquivo", async function() {
  //   const expected = DEFAULT_ITEM_CADASTRAR;

  //   ok(null, expected);
  // });
});
