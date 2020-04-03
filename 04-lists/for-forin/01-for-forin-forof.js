const { loadPeople } = require("./service");

const main = async () => {
  try {
    const result = await loadPeople("a");
    const names = [];

    console.time("for");
    for (let index = 0; index < result.results.length; index++) {
      names.push(result.results[index].name);
    }
    console.timeEnd("for");

    console.time("for-in");
    for (let i in result.results) {
      names.push(result.results[i].name);
    }
    console.timeEnd("for-in");

    console.time("for-of");
    for (item of result.results) {
      names.push(item.name);
    }
    console.timeEnd("for-of");

    console.time("forEach");
    result.results.forEach(item => names.push(item.name));
    console.timeEnd("forEach");

    // console.log("Names: ", names);
  } catch (error) {
    console.error("error", error);
  }
};

main();
