
// spread and rest function

let a = [1, 2, 3];
let b = [...a, 4, 5];

console.log(b); // [1, 2, 3, 4, 5]


// rest 


function add(...numbers) {
  let sum = 0;
  for (let n of numbers) {
    sum += n;
  }
  console.log(sum);
}

add(10, 20, 30); // 60
