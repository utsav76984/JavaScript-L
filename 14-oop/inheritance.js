
// **Inheritance** => Child class using parent class properties and methods

// Parent Class

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Object of parent class

const animal1 = new Animal("dog", 20);



console.log("animal1:", animal1);


// Child Class

class AnimalDetail extends Animal {
  constructor(name, age, city) {
    super(name, age);  // Calling parent constructor
    this.city = city;
  }
}

// Object of child class
const animalDetail = new AnimalDetail("pintu", 20, "sitapur");

console.log("animalDetail:", animalDetail);




