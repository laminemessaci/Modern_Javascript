//xxxxxxxxx methode depreciée  xxxxxxxxxx
async function getAniaml(index) {
  const animals = ["dog", "cat", "horse", "cow", "pig"];
  return animals[index];
}

async function getAniamlWithAsync(count) {
  let animalsAsync = [];
  for (let index = 0; index < count; index++) {
    const oneAnimal = await getAniaml(index);
    animalsAsync.push(oneAnimal);
  }
  console.log(animalsAsync);
  return animalsAsync;
}

//getAniamlWithAsync(5);

// xxxxxxxxx methode conseillée xxxxxxxxxx

async function getAniamlWithPromiseAll(count) {
  let arrayOfPromises = [];
  for (let index = 0; index < count; index++) {
    arrayOfPromises.push(getAniaml(index));
  }
  const animals = await Promise.all(arrayOfPromises);
  console.log(arrayOfPromises);
  return animals;
}

getAniamlWithPromiseAll(5);
