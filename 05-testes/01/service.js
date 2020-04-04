const { get } = require("axios");

const URL = `https://swapi.co/api/people`;

async function loadPersons(name) {
  const baseUrl = `${URL}/?search=${name}&format=json`;
  const {
    data: { results }
  } = await get(baseUrl);

  return results.map(formatResponse);
}

function formatResponse(item) {
  return {
    nome: item.name,
    peso: item.height
  };
}

module.exports = {
  loadPersons
};
