
// data types

// 1. string

// 2. bigint

// 3. number

// 4. boolean

// 5 Object

// 6. null

// 7. undefined

// 8. symbol




// Data Type     Description                                          Example
// String        Textual data.                                        'hello', "hello world!", etc.
// Number        An integer or a floating-point number.               3, 3.234, 3e-2, etc.
// BigInt        An integer with arbitrary precision.                 900719925124740999n, 1n, etc.
// Boolean       Any of two values: true or false.                    true, false
// Undefined     A variable that has not been initialized.            let a;
// Null          Represents a null value.                             let a = null;
// Symbol        Unique and immutable identifiers.                    let value = Symbol('hello');
// Object        A collection of key-value pairs.                     let student = { name: "John" };



// 📌 Primitive  Types: Stored in stack, immutable, passed by value.
// Example: String, Number, Boolean, Null, Undefined, Symbol, BigInt.



// In JavaScript, data types define the kind of value a variable holds. There are two main types: primitive like string, number, boolean, null, undefined, bigint,
//  and symbol — and non-primitive like objects, arrays, and functions.
//  Primitive types hold single values, while non-primitive types hold collections or complex data.


// data bye value

// const num1 = 10;

// let num2 = num1;

// console.log("num1", num1)
// console.log("num2", num2)

// num2 = 20;


// console.log("num1", num1)
// console.log("num2", num2)



const person = { name: "alice" };
const person2 = person; 

person2.name = "john";

console.log("person 1", person);  
console.log("person 2", person2); 


// String

let greetings = "Hello";
console.log("greetings: " + greetings);

let greetingType = typeof greetings;
console.log("Type of greetings:", greetingType);


let age = 25;
console.log("age: " + age);
console.log("Type of age:", typeof age);

let bignumber = 6351245515;
console.log("type of bignumber:", typeof bignumber)





