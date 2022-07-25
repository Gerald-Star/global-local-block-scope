
//Global Scope
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun2(); // call the function output myGlobal: 10
console.log(myGlobal); 
// to console log myGlobal here shows 10 bcs myGlobal is defined outside the function



// LOCAL SCOPE
//Here is a function myTest with a local variable called loc.

function myTest() {
    const loc = "foo";
    console.log(loc);
  }
  
  myTest();
  //console.log(loc);
  
  /*The myTest() function call will display the string
   foo in the console. The console.log(loc) line 
   (outside of the myTest function) 
   will throw an error, as loc is not defined 
   outside of the function.*/

// EXAMPLE : Declare a local variable myVar inside 
// myLocalScope and run the tests.

/*Note: The console will still display ReferenceError: myVar
 is not defined, but this will not cause the tests to fail.*/


 /*function myLocalScope() {
    
    var myVar;
    console.log('inside myLocalScope', myVar);
   }
   myLocalScope(); */
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
 
  //console.log('outside myLocalScope', myVar);


// Here we declare myVar for Global scope,  
// myVar and myVarRea for local


   // Example declaration with global and local variable

   myVar = 10;
function myLocalScope() {
  // Only change code below this line
myVarRea = 20;
  console.log('inside myLocalScope', myVar);
}
myLocalScope(); // call the function

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
console.log('inside myLocalScope', myVarRea);

//output here will be inside myLocalScope = 10 bcs of myVar
// outside myLocalScope 20  bcs of myVar
// because Global scope is declared myVar = 10
// output local scope is delcared myVarRea 10



// Having Global Scope and Local scope with the same name
/* when the function is called returns the local scope because
the local scope with return overrides the global scope.*/

// EAMPLE
const mealFood = "Bread"; 

function myMeal() { 
  const mealFood = "Veggies"; 
  return mealFood; 
  //console.log(mealFood);
}

//call the function 
myMeal();


//Example
const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
 
}

myFun();

/*The function myFun will return the string 
Head because the local version of the variable is present.*/


//EXAMPLE 

const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
 
}

myOutfit();

/* Add a local variable to myOutfit function to override 
the value of outerWear with the string sweater.*/


let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
//addSum is a function without 


//Undefined Value returned from a Function

/* a return statement. The function will change
 the global sum variable but the returned 
 value of the function is undefined.*/


//EXAMPLE
 /*
Create a function addFive without any arguments. 
This function adds 5 to the sum variable, but its 
returned value is undefined.
 */

let sumPlus = 0;

function addThree() {
  sumPlus = sumPlus + 3;
}

// Only change code below this line

function addFive () {
  sumPlus = sumPlus + 5;
  // sumPlus += 5; are the same
  
}

// Only change code above this line

addThree(3);
addFive(5);
//As you can see, sum is added by 5 with no issues, 
//but since there is no return statement, 
//there is an undefined output.


/* Write a function nextInLine which takes an array 
(arr) and a number (item) as arguments.

Add the number to the end of the array,  use .push()method
then remove the first element of the array. .shift()

The nextInLine function should then return the 
element that was removed.

*/

function nextInLine(arr, item) {
    arr.push(item);
    const removed = arr.shift();
    return  removed; 

    }



    // If conditional Statement with the boolean value
    // True or False

    function test (myCondition) {
        if (myCondition) {
          return "It was true";
        }
        return "It was false";
      }
      
      test(true);
      test(false);


      //EXAMPLE 2

      function testRun (myScore) {
        if (myScore) {
            return "I passed the exam true"
        }
        return "I failed the exam false"
      }
testRun(true);
testRun(false);


