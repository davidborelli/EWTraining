Array.prototype.meuMap = function(callback) {
  const newMapedArray = [];

  for (let index = 0; index <= this.length - 1; index++) {
    const result = callback(this[index], index);
    newMapedArray.push(result);
  }

  return newMapedArray;
};

const arr = [
  {
    name: "David",
    age: 30
  },
  {
    name: "Erick",
    age: 22
  }
];

const testFn = () => {
  console.time("my-method");
  arr.meuMap(person => console.log(person));
  console.timeEnd("my-method");
};

testFn();
