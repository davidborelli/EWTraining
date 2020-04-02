const EventEmitter = require("events");

class MeuEmissor extends EventEmitter {}

const meuEmissor = new MeuEmissor();
const nomeEvento = "usuario:click";

// meuEmissor.on(nomeEvento, click => console.log("Um usuário clicou", click));

// meuEmissor.emit(nomeEvento, "Na barra de rolagem");
// meuEmissor.emit(nomeEvento, "Clicou no ok");

// setInterval(() => {
//   meuEmissor.emit(nomeEvento, "Clicou no ok");
//   meuEmissor.emit(nomeEvento, "Na barra de rolagem");
// }, 1000);

const stdin = process.openStdin();
stdin.addListener("data", value =>
  console.log(`Você digitou: ${value.toString().trim()}`)
);
