
let number = [30, 55, 88, 78, 99];


let sum = 0;

for (let i = 0; i < number.length; i++) {
  sum += number[i];
}

console.log("sum", sum);

// reduce

// 👉 reduce() does the same thing, but more cleanly:        // acc (accumulator) → total till now

// curr → current number in array



    const total =number.reduce((acc, curr) =>{
        acc += curr;

        return acc;
    })

    console.log("total", total); 



 // higher marks
 
let studentMarks = [88,66,99,88,77,55,33];

let max = 0;

for (let i = 0; i < studentMarks.length; i++) {
  if (studentMarks[i] > max) {
    max = studentMarks[i];
  }
}

console.log("higher marks", max);




// more then example

const shoppingList = [
  { name: "Apples", price: 1500, quantity: 3 },
  { name: "Bananas", price: 750, quantity: 6 },
  { name: "Mangoes", price: 3000, quantity: 3 },
];

const totalBill = shoppingList.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
);

console.log("Total Bill:", totalBill); 



