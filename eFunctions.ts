function capitalize(name) {
  return name.toUpperCase();
}
function add(numG, numH) {
  return numG + numH;
}

// Shorthand
const capitalize1 = (name) => name.toUpperCase();
const add1 = (numG, numH) => numG + numH;

// Shorthand TypeScript (specifying variable type)
const capitalize2 = (name: string) => name.toUpperCase();
const add2 = (numG: number, numH: number) => numG + numH;

const restaurant = {
  details: {
    name: "Classico Italiano",
    menu: ["Garlic", "Bread", "Salad", "Pizza"],
  },
};

// Longhand
console.log(
  "Name ",
  restaurant.hasOwnProperty("details") &&
    restaurant.details.hasOwnProperty("name") &&
    restaurant.details.name
);

// Shorthand
console.log("Name:", restaurant.details?.name);