

// <!-- Types of Variable Declarations -->


// <!--1 var — Function-scoped

//    2 let — Block-scoped (ES6+)

//    3 const — Block-scoped, but immutable (value can't be reassigned) -->


//    <!-- example -->

   function pro(){

    var person ="utsav";
    console.log("person->", person)
   }

//    function invocation

   pro();

//    console.log("person variable is not de->",person)

let num;

// variable assignment

num = 24;

console.log(num);