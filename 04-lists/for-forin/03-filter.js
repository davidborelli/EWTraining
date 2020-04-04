const { loadPeople } = require("./service");

Array.prototype.meuFilter = function(callback) {
  const lista = [];
  for (index in this) {
    const item = this[index];
    const result = callback(item, index, this);

    if (!result) continue;
    lista.push(item);
  }
  return lista;
};

const loadInformations = async () => {
  try {
    const { results } = await loadPeople("a");

    const familiaLars = results.meuFilter((item, index, lista) => {
      return item.name.toLowerCase().indexOf("lars") !== -1;
    });

    familiaLars.map(pessoa => console.log(pessoa.name));
  } catch (error) {}
};

loadInformations();
