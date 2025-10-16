let text = "hello utsavh";

// match method
console.log("match in string:", text.match("ut")); 


console.log("not finding match in string : ", text.match("ab"));


// repeat() method ==> returns new string with a number of copies of strings


console.log("reperting the string:" , text.repeat(3))

// replace()  method ==> searches a string for a pattern and return a new string where First match are replaced

console.log("hello to hy:", text.replace("hello","hy"))

// replaceAll() method ==> searches a string for a pattern and returns a new string where all matches are replaced

console.log("replacing l to L in all syntax :", text.replaceAll("l", "L"));


// search() method ==> searches a string for a value, or regular expression, and returns  the index(position) of the match



console.log("serches i in text:", text.search("l"))

//here we cant put starting index we can do that indexOf method


console.log("indexof op whitu starting index", text.indexOf("h", 2))



// slice() method ==> extracts a part of a string and returns a new string

// here first is staring index and after that end index is start counting from 0

console.log("slice OP :", text.slice(2));

console.log("slice OP :", text.slice(2, 5));

console.log("slice OP", text.slice(3, 8));

console.log("slice OP :", text.slice(-1)); // it will start from last