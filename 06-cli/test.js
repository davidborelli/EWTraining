const { deepEqual, ok } = require("assert");

const database = require("./database");

const DEFAULT_ITEM_CADASTRAR = {
  id: 1,
  nome: "Flash",
  poder: "Speed"
};

const DEFAULT_ITEM_ATUALIZAR = {
  id: 2,
  nome: "Lanterna Verde",
  poder: "Energia do anel"
};

/*
  No JS ao inves de utilizar array[0], podemos utilizar da seguinte forma:
  [array] = ira pegar primeira posicao
  [array1, array2] = ira pegar primeira e segunda posicao, e assim por diante
*/

describe("Suite de manipulacao de Herois", function() {
  before(async () => {
    await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
    await database.cadastrar(DEFAULT_ITEM_ATUALIZAR);
  });

  it("Deve pesquisar um heroi usando arquivos", async function() {
    const expected = DEFAULT_ITEM_CADASTRAR;
    const [resultado] = await database.listar(expected.id);

    deepEqual(resultado, expected);
  });

  it("Deve cadastrar um heroi, usando arquivo", async function() {
    const expected = DEFAULT_ITEM_CADASTRAR;

    await database.cadastrar(DEFAULT_ITEM_CADASTRAR);

    const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id);

    deepEqual(actual, expected);
  });

  it("Deve remover um heroi, usando arquivo", async function() {
    const expected = true;
    const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id);
    deepEqual(resultado, expected);
  });

  it("Deve atualizar um heroi", async function() {
    const expected = {
      ...DEFAULT_ITEM_ATUALIZAR,
      nome: "Batman",
      poder: "Dinheiro"
    };

    const novoDado = {
      nome: "Batman",
      poder: "Dinheiro"
    };

    await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado);
    const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id);

    deepEqual(resultado, expected);
  });
});
