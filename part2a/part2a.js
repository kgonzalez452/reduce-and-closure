// Challenges Set A
// Challenge 1
// Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello". 

    function createFunction () {
        function function1 () {
            return 'Hello, Lurker o_o...';
        }
        return function1();
    }

    
    const function1 = createFunction();
    // now we'll call the function we just created
    function1; //should console.log('hello');  
    console.log(createFunction());

//  When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works. 

// Challenge 2
// Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.

// Given Variables
var printSample = createFunctionPrinter('sample');
var printHello = createFunctionPrinter('hello');

// My Answer
function createFunctionPrinter(input){
    // print out selected input
    return function innerFunc(){
        console.log(input);
    }
}
printSample();
printHello();
// now we'll call the functions we just created printSample(); 
// should console.log('sample'); true
// should console.log('hello'); true

// Challenge 3
// Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope. Uncomment those lines of code. Try to deduce the output before executing. 

function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before you do, guess what will be logged from each function call.

willCounter();
// 1
willCounter();
// 2
willCounter();
// 3
jasCounter();
// 1
willCounter();
// 4

//the counter functions increment each time it is called, and since will, and jas are two different counters they will only increment when they are called in that specific call, so if i call jasCounter once more, the counter of that function would be set to 2!