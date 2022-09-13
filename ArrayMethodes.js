async function getAniaml(index) {
  return new Promise(function (resolve, reject) {
    // reject(new Error("Not implemented"));
    resolve(() => {
      return index;
    });
  });
}

// depricated
async function getAllAnimals1() {
  let animals = [];
  for (let index = 0; index < 20; index++) {
    const oneAnimal = await getAniaml(index);
    animals.push(oneAnimal);
  }
  return animals;
}

// OK
async function getAllAnimals() {
  let arrayOfPromises = [];
  for (let index = 0; index < 20; index++) {
    arrayOfPromises.push(getAniaml(index));
  }

  const animals = await Promise.all(arrayOfPromises);
  return animals;
}
async function results() {
  const animals = await getAllAnimals();
  return animals;
}
console.log(results);
