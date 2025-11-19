// **Abstraction** => Abstraction means hiding certain details that don't matter to the user and only showing essential features or functions.

// Example of this:

// FrontCamOn(), FrontCamOff() => front Camera

// example

class car{
 // Private property (not directly accessible)

 #enginestatus ="off";

//  method to turn engi

startengine(){

    this.#enginestatus ="on";
    console.log("enginestart");
}

  // Method to turn the engine off

  stopengine(){
    this.#enginestatus ="off";
    console.log("enginestop");

  }
  // Public method to get engine status   
    
  //  // This demonstrates abstraction: the user doesn't see internal complexity


    getenginestatus(){
        return this.#enginestatus;
    }
}


// creating car Object

const mycar = new car();

// Using abstraction to interact with the car without worrying about the engine's internal details

mycar.startengine();
console.log(mycar.getenginestatus());
mycar.stopengine();
console.log(mycar.getenginestatus());



