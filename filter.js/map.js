// element → current value

// index → current index

// array → original array


let number =[8, 5, 9, 6, 3, 7, 4, 8];

let     result = number.map((num) => num * 4);

console.log("result of five multiply", result);

let result2 = number.map((num)=>{
 return num;    
})


console.log("result2", result2)

const personDetails =[
    {

         name: "utsav", age: 19, city: "bhavanagar", profession: "Engineer"
    },

    {
        name: "pratik", age: 19, city: "rajkot", profession: "full stack devloper"
    },

    {
        name: "dharmit", age: 19, city: "mp", profession: "devloper"
    },

    
];

let personNames = personDetails.map((person) => {
  return person.name;
});


console.log("person names", personNames);
