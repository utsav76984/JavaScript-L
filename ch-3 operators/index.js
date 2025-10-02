
// There are a total of seven types of operators in JavaScript:


// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Bitwise Operators
// 6. Unary Operators
// 7. Miscellaneous Operators

const num  = console.log([] - "1");

// ----------------------------------------------------------

// 1. Arithmetic Operators

let a = 20;
let b = 8;

console.log("addition:", a + b )
console.log("subtraction:", a - b )
console.log("multiplication:", a *b)
console.log("Division:", a / b)
console.log("modulus:", a % b)
console.log("Exponentiation:", a ** b);

// ----------------------------------------------------------

// 2. Assignment Operators

let x = 5;
x += 2; // Equivalent to x = x + 2
console.log("x after += 2:", x); // 7


// ---------------------------------------------------------


// 3. Comparison Operators


console.log("Equal:", 5 == "5");
console.log("Strict Equal:", 5 === "5"); // false (strict equality, no type coercion)
console.log("Not Equal:", 10 != 5); // true
console.log("Greater Than:", 10 > 5); // true
console.log("Less Than:", 3 < 5); // true


// ---------------------------------------------------------------


// 4. Logical Operators

let isTrue = true;
let isFalse = false;

console.log("and:", isTrue && isFalse )
console.log("OR:", isTrue || isFalse); // true
console.log("NOT:", !isTrue); // false



// 5. Bitwise Operators
// Operate on binary representations of numbers.

let p = 5; // 0101 in binary
let q = 3; // 0011 in binary

console.log("Bitwise AND:", p & q); // 1 (0001)
console.log("Bitwise OR:", p | q); // 7 (0111)
console.log("Bitwise XOR:", p ^ q); // 6 (0110)

// ---------------------------------------------

// 7. Miscellaneous Operators

// Ternary Operator
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote?", canVote); // Yes

// Typeof Operator
console.log("Type of 42:", typeof 42); // "number"
console.log("Type of 'Hello':", typeof "Hello"); // "string"