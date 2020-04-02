/*
  00 Obter um usuario
  01 Obter o numero de telefone de um usuario a partir de seu Id
  02 Obter o endereco do usuario pelo Id

  Importando um módulo interno do NodeJS
*/

function obterUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: 1,
        nome: "David",
        dataNascimento: new Date()
      });
    }, 1000);
  });
}

function obterTelefone(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        telefone: "981261055",
        ddd: "18"
      });
    }, 2000);
  });
}

function obterEndereco(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        rua: "Luiz Lauro Damiazo",
        numero: 243,
        cidade: "Limeira"
      });
    }, 2000);
  });
}

// Primeiro passo, adicionar async no nome da função
async function main() {
  try {
    console.time("media-promise");
    const usuario = await obterUsuario();

    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEndereco(usuario.id)
    ]);
    // const telefone = await obterTelefone(usuario.id);
    // const endereco = await obterEndereco(usuario.id);
    const telefone = resultado[0];
    const endereco = resultado[1];

    console.log({
      ...usuario,
      ...telefone,
      ...endereco
    });
    console.timeEnd("media-promise");
  } catch (error) {
    console.error(error);
  }
}

main();
