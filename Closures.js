const axios = require("axios");

const adder = (firstName) => {
  const add = (secondName) => console.log(firstName + secondName);
  return add;
};

const addSeven = adder(7);
addSeven(7); // Output: 17
const addFive = adder(5);
addFive(100); // Output:105

// All real-life of closures ln production code
const dataFetcher = (url) => {
  return async function getData(path) {
    try {
      const endpoint = path ? `${url}/${path}` : url;
      const res = await axios.get(endpoint);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
};

const getUserDataFetcher = async (path) => {
  try {
    const users = dataFetcher("https://jsonplaceholder.typicode.com/users");
    const usersData = await users(path);
    console.log("one user: ", usersData);
  } catch (error) {
    console.log(error);
  }
};

//Gets the entire users list
getUserDataFetcher(); // Output: ...-(5) (Object, Object, Object, Object, Object]

//Gets the to do with id: 1
getUserDataFetcher(1); // Output:...- {id: 1, name: "Lean Jen", username:"Brt"}

//Gets the to do with id: 4
getUserDataFetcher(2); // Output: ...- {id: 4, name: "Joe Leb",username: "Leb"}
