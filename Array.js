// export const useStateStorage = (key, defaultValue) => {
//   const [value, setValue] = useState(() => {
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : defaultValue;
//     } catch (error) {
//       console.log(error);
//       return defaultValue;
//     }
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(value));
//   }, [value]);

//   return [value, setValue];
// };

////1. Pop
const animals = ["dog", "cat", "horse", "cow", "pig"];
const renouvellement = animals.pop();
console.log(animals); // ["dog", "cat", "horse", "cow"]
console.log(renouvellement); // '􀀔'I ·
//2. Push
const animals2 = [];
animals.push();
console.log(animals); // [·•·• '-lf', '•'I', '<9,', ·•·]
//3. Shift
const animals3 = ["dog", "cat", "horse", "cow", "pig"];
const removedElement = animals3.shift();
console.log(animals3); // ["cat", "horse", "cow", "pig"]
console.log(removedElement);
//4. Unshift
const animals4 = ["dog", "cat", "horse", "cow", "pig"];
animals4.unshift("snick", "mouse");
console.log(animals4); // ["snick", "mouse", "dog", "cat", "horse", "cow", "pig"]
//5. Includes
const animals5 = ["dog", "cat", "horse", "cow", "pig"];
const elementlncluded = animals5.includes("dog");
console.log(elementlncluded); // true


// Techniques to manipulate JavaScript Arrays Like a Boss
const menuOrder = [
  { name: "Spaghetti", price: 18 },
  { name: "Pizza", price: 8 },
  { name: "Wine", price: 50 },
];
// How To Filter Objects In An Array Based On A Specific Condition
const FilteredMenu = menuOrder.filter((item) => item.price < 9);
console.log(FilteredMenu); // Output: ,k- [{ name: "Pizza", pr1ce: 8 }]
// How To Get The Highest st Value In An Array  The most expensive item
const mostExpensive = Math.max(...menuOrder.map((item) => item.price));
console.log(mostExpensive); // Output: , k - S©
// The cheapest item
const cheapest = Math.min(...menuOrder.map((item) => item.price));
console.log(cheapest); // Output: .k- 8
// how To Use Reduce Over An Array Of Objects Computing the total amount of the order
const totalPrice = menuOrder.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice); // Output: ,.- 68
