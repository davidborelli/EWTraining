/*
  00 Obter um usuario
  01 Obter o numero de telefone de um usuario a partir de seu Id
  02 Obter o endereco do usuario pelo Id

  Importando um módulo interno do NodeJS
*/
const util = require("util");
const obterEnderecoAsync = util.promisify(obterEndereco);

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

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "Luiz Lauro Damiazo",
      numero: 243,
      cidade: "Limeira"
    });
  }, 2000);
}

const usuarioPromisse = obterUsuario();

usuarioPromisse
  .then(usuario => {
    return obterTelefone(usuario.id).then(result => {
      return {
        ...usuario,
        ...result
      };
    });
  })
  .then(resultado => {
    const endereco = obterEnderecoAsync(resultado.id);
    return endereco.then(result => {
      return {
        ...resultado,
        ...result
      };
    });
  })
  .then(resultado => console.log("resultado", resultado))
  .catch(error => console.log("error", error));
