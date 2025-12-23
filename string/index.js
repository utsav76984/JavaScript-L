
// let name = 'utsav kalathiya';// utsav is string data


// string example

let text ='latitube';

console.log("text :", text)


// char at


console.log("cher at:", text.charAt(4))

// concat

console.log("i hade a leptop", text.concat("dell") );

//end with

console.log("end with", text.endsWith('e')); // true


console.log("end with", text.endsWith('a')); // faise

// text includes

console.log("text includes :", text.includes('t')); //  true

// index of

console.log("index of", + text.indexOf('latitube')) // true  ans 0

console.log("not available will show", text.indexOf('latitudee')) // faise ans -1


// last index of

console.log("last index of :", text.lastIndexOf('e'))


console.log("last index length", text.length);

// text match

console.log("index match", text.match('l'))


// text repeart


console.log("text repeart :", text.repeat(4) )

// replase

console.log("text replase :", text.replace('latitu', 'hello'))


// replase all


console.log("replase all :", text.replaceAll('e' , 'E'));


// search


console.log('text search:', text.search('l'))


// index of startion index


console.log("startion index =>", text.indexOf('l', 5) );


console.log("text example", text); // hello shivam

console.log("slice OP :", text.slice(2));

console.log("slice OP :", text.slice(2, 5));

console.log("slice OP", text.slice(3, 8));

console.log("slice OP :", text.slice(-1)); // it will start from last



// Splits a string into an array of substrings
 let name = 'utsav kalathiya';


console.log("split string into array with space added", name.split(" "));


console.log("split string without space:", name.split(""))


console.log("split string with o", name.split("l")); // will remove specified value in text and return string


// startsWith() methods ==> startswith method whether a string begins with specified characters


console.log("startwith :", name.startsWith('utsav')) // true

console.log('start with:', name.startsWith('kalathiya')) // false



console.log("text", text);

console.log("substring example", text.substring(2));

console.log("substring op =>", text.substring(1, 4));

console.log("substring op =>", text.substring(-1)); // return full text


console.log("lowercase op =>", text.toLowerCase());

// toupperCase() ==> Returns a string converted to uppercase letters

console.log("upper case op =>", text.toUpperCase());

// trim()	Returns a string with removed whitespace

let trimTextExample = "     hello    ";

console.log("length op text for trim =>", trimTextExample.length);

console.log(
  "whitespace removed and then after length of string =>",
  trimTextExample.trim().length
);

// we can trim from start and end using trim.start() and trim.end() methods

// example

console.log(
  "removing whitespaces from starting part only and then after length of string =>",
  trimTextExample.trimStart().length
);

// trim.end() example

console.log(
  "removing whitespaces from ending part only and then after length of string =>",
  trimTextExample.trimEnd().length
);
