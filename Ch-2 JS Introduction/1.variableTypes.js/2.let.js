// let in JavaScript (ES6+)

// In ES6 (ECMAScript 2015), let was introduced as a better alternative to var for variable declaration.

// let has a block scope which means variable define using let can only be accessed in block it's not accessible outside of block

// example

function checkBlockScope() {
  let message = "Hello from the function!";

  if (true) {
    let blockMessage = "Hello from the block!";
    console.log(blockMessage); // Accessible here
  }

  console.log(message); // Accessible here

  // Trying to access blockMessage outside the block will cause an error
  //   console.log(blockMessage); // ReferenceError: blockMessage is not defined
}

checkBlockScope();

// using let we can declare variable and assign it later
// example ( to check this you have to comment  reference error code )

// variable declaration
let person;

// assigning value to the variable

person = "utsav";

console.log("here variable value will be =>", person);
// we can variable value

person = "another person";

console.log("here variable value will be changed =>", person);



// const

const name = "shivam"; //  Must initialize immediately

function personDetail() {
  const person = "shivam shrivastav";

  console.log("person details =>", person); //  Accessible here

  function personAge() {
    const age = 22;
    console.log("person age =>", age); //  Accessible here
  }

  personAge();

  //  ReferenceError: age is not defined (outside inner block)
  // console.log("person age will not be accessible here =>", age);
}

personDetail();
