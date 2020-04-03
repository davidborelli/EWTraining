const { get } = require("axios");

const URL = `https://swapi.co/api/people`;

const loadPeople = async name => {
  const result = await get(`${URL}/?search=${name}&format=json`);
  return result.data;
};

module.exports = {
  loadPeople
};
