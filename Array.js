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
//6. Find
let date = new Date().toUTCString().slice(5, 16);
console.log(date); // 02 Sep 2022
