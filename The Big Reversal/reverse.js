/**
  Description: The Big Reversal
  (Suggested by @Haley.Ward, Front End Techdegree Graduate)
  
  
  You just inherited a mirror writing factory from an eccentric 
  old uncle. This factory is where all the ambulances and other 
  emergency vehicles get those mirrored words that go on the 
  front of their vehicles so other drivers can read them in 
  their rearview mirrors.
  
  But bad news! The machine that reverses the words just broke 
  down and none of the factory elves know how to fix it. Luckily, 
  you know JavaScript and can save the day.
  
  For this Code Adventure, you'll create the logic inside of a 
  function called "reverse", located below. This function will 
  take any string as an argument. Your job is to reverse the 
  string and return the new "backwards" string as a result, so 
  that:

  reverse("ambulance") == "ecnalubma"
  
  Note: This is very easily done with one line of javascript and 
  the "reverse" method. However, to get the most out of this 
  experience, avoid compressed solutions that use built in methods. 
  Keeping to for loops, if blocks, concatenation, and other simple, 
  low level techniques will give you a greater understanding of 
  not only how those built-in methods work, but how problems are 
  solved in JavaScript and programming in general.
  
  
  TO RUN THE TESTS, type the command below into the console and 
  press enter.

    node reverse.js
**/



/** The Function **/
function reverse(string) {
  
    // your code goes here
    
    return string.split("").reverse().join("");

  }
  
  
  
  
  
  /* The Output: These log statements are for feedback and debugging **/
  console.log('\x1Bc'); // Ever wanted to know how to clean the console? This is the line.
  console.log("Your function's current output:"); 
  console.log(
  
  reverse("dictionary") // this is here for you to use for debugging purposes
  
  );
  console.log("----------------------------------------------------");
  
  
  
  
  
  /** The Tests: Do Not Modify Anything Below **/
  
  /** Test 1 */
  if(reverse("dictionary") == "yranoitcid") {
    console.log('Test 1 passed');
  } else {
    console.log('Test 1 failed');
  }
  
  /** Test 2 */
  if(reverse("a") == "a") {
    console.log('Test 2 passed');
  } else {
    console.log('Test 2 failed');
  }
  
  /** Test 3 */
  if(reverse("tacocat") == "tacocat") {
    console.log('Test 3 passed');
  } else {
    console.log('Test 3 failed');
  }
  
  /** Test 4 */
  if(reverse("A reversed phrase") == "esarhp desrever A") {
    console.log('Test 4 passed');
  } else {
    console.log('Test 4 failed');
  }
  