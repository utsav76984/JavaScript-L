// Encapsulation means wrapping data (properties) and methods inside a class and restricting direct access using private fields.
// In JavaScript, encapsulation is mainly done using:

// ✔ #privateFields
// ✔ Getters and setters
// ✔ Public method



// Encapsulation Example

class Student {
  // Private fields (not directly accessible outside the class)
  #name;
  #standard;
  #school;

  constructor(name, standard, school) {
    this.#name = name;
    this.#standard = standard;
    this.#school = school;
  }

  // Getter for name
  getName() {
    return this.#name;
  }

  // Setter for name
  setName(newName) {
    this.#name = newName;
  }

  // Method to display student details
  getDetails() {
    return `Name: ${this.#name}, Standard: ${this.#standard}, School: ${this.#school}`;
  }
}

// Creating an object of the Student class
const studentDetails = new Student("parth", 10, "school");



// Access name using getter
console.log(studentDetails.getName()); // John




// Trying to access private field directly (will be undefined)
console.log(studentDetails.name); // undefined



// Modifying name using setter
studentDetails.setName("utsav");



// Accessing updated name
console.log(studentDetails.getName()); // utsav



// Displaying full details
console.log(studentDetails.getDetails());

