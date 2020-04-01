/*
  00 Obter um usuario
  01 Obter o numero de telefone de um usuario a partir de seu Id
  02 Obter o endereco do usuario pelo Id
*/

function obterUsuario(callback) {
  setTimeout(function() {
    return callback(null, {
      id: 1,
      nome: "David",
      dataNascimento: new Date()
    });
  }, 1000);
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: "981261055",
      ddd: "18"
    });
  }, 2000);
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

obterUsuario(function resolverUsuario(error, usuario) {
  if (error) {
    console.error("VAI DA NAO EM", error);
    return;
  }

  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.error("VAI DA NAO EM 2", error);
      return;
    }

    obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {
      if (erro2) {
        console.error("VAI DA NAO EM 3", error);
        return;
      }

      console.log(`
        Nome: ${usuario.nome},
        Endereco: ${endereco.rua}, ${endereco.numero},
        Telefone: (${telefone.ddd}) ${telefone.telefone}
      `);
    });
  });
});
// const telefone = obterTelefone(usuario.id);

// console.log("usuario", usuario);
// console.log("telefone", telefone);
