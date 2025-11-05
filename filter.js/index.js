let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let evenNumber = number.filter((num) => num % 2 === 0);

console.log("even numbers", evenNumber);

const personDetails = [
  { name: "utsav", age: 19, city: "rajkot", profession: "Engineer" },
  {
    name: "dharmik sanga",
    age: 20,
    city: "bhavanagar",
    profession: "Designer",
  },
  { name: "pratik", age: 20, city: "up", profession: "devloper" },
  { name: "vaishali", age: 20, city: "godhra", profession: "Teacher" },
  {
    name: "David Martinez",
    age: 38,
    city: "San Francisco",
    profession: "Developer",
  },
];

let personAge = personDetails.filter((person) => person.age > 30);

console.log("person age > 30", personAge);

let personNames = personAge.map((person) => person.name);

console.log("person names", personNames);