const { loadPersons } = require("./service");
const assert = require("assert");
const { r2d2 } = require("./mock");

// Instalamos o pacote nock, para simular requisicoes
const nock = require("nock");

describe("Star Wars Tests", function() {
  this.beforeAll(() => {
    const response = r2d2;

    nock("https://swapi.co/api/people")
      .get("/?search=r2-d2&format=json")
      .reply(200, response);
  });

  it("Deve buscar o R2D2 com o formato correto", async () => {
    const expected = [{ nome: "R2-D2", peso: "96" }];

    const nomeBase = `r2-d2`;
    const resultado = await loadPersons(nomeBase);

    assert.deepEqual(resultado, expected);
  });
});
