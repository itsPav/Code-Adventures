/**
  Description: The Problem at "fizzbuzz" Cola
  
  The word around the water cooler is that the marketing department 
  has lost their collective mind. They've come up with a wild pro-
  motional campaign to drive sales and increase interest in their 
  flagship product, "FizzBuzz" Cola. The plan is to number each bottle 
  that comes off the assembly line, certain numbers being good for a 
  prize. Here's how it will work. Each bottle will get its number 
  printed on the label, with a few exceptions. 
  
  Every bottle whose number can be evenly divided by 3 gets the word 
  "Fizz" instead of a number, and will be worth one free cola. 
  
  Every bottle whose number can be evenly divided by 5 gets the word 
  "Buzz", and will be worth a free "FizzBuzz" bottle opener.
  
  And if a number can be evenly divided by both 3 and 5, it gets the 
  word "FizzBuzz", and will be worth a lavish, all expense paid trip 
  to the "FizzBuzz" factory for a day cola making fun.
  
  The problem is that no one in the company knows how to accomplish 
  this complicated labeling process. Luckily, you can be the hero and 
  save the day with a little clever JavaScript.
  
  For this classic programming challenge, you'll add the logic to a 
  function called fizzbuzz, which has already been created for you 
  below.  This function will take a positive integer (whole number) 
  as an argument. Your job is to make the function count from one to 
  the number given as an argument, and return a string of each number 
  and word in order, divided by spaces, so that:
  
  fizzbuzz(15) == "1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz"
  
  
  HELPFUL TIP: 
  
  The modulo, or remainder operator can be very helpful with
  this Adventure.  Here's a reference URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()
  
  
  BONUS CHALLENGE:
  
  As an extra challenge, your fizzbuzz function should be able to take
  a second, optional "start" argument to start the counting sequence 
  from, so that:
  
  fizzbuzz(40, 30) == "fizzbuzz 31 32 fizz 34 buzz fizz 37 38 fizz buzz"
  
  
  TO RUN THE TESTS:
  
  type the command below into the console and press enter.

    node fizzbuzz.js
  
*/


/** The Function */
function fizzbuzz(number, start) {  
  // your code goes here
  var result = "";
  
  if(isNaN(start)) {
   num = 1;
  } else {
      var num = start;
  }
  
  for(num ; num <= number; num += 1) {
    if(num % 5 == 0 && num % 3 == 0)
    {
      result += 'fizzbuzz' + " ";
    }
    else if(num % 3 == 0)
    {
     result += 'fizz'  + " ";
    }
    else if(num % 5 == 0) 
    {
      result += 'buzz' + " ";
    }
    else
    {
      result += num + " ";
    }
    
    if(num == number) {
      result = result.slice(0,-1);
    }
  }
  return result;
}

console.log('\x1Bc'); // Ever wanted to know how to clean the console? This is the line.
console.log("Your function's current output:"); 
console.log(

fizzbuzz(5) // this is here for you to use

);
console.log("----------------------------------------------------");





/** The Tests: Do Not Modify */

const toFive = "1 2 fizz 4 buzz";

const toFifteen = "fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz";

const toThirty = "16 17 fizz 19 buzz fizz 22 23 fizz buzz 26 fizz 28 29 fizzbuzz";

const smallPartialSeries = "fizzbuzz 31 32 fizz 34 buzz fizz 37 38 fizz buzz";

const largePartialSeries = "fizzbuzz 346 347 fizz 349 buzz fizz 352 353 fizz buzz 356 fizz 358 359 fizzbuzz 361";

/** Test 1 */
if(fizzbuzz(5) == toFive) {
  console.log('Test 1 passed');
} else {
  console.log('Test 1 failed');
}

/** Test 2 */
if(fizzbuzz(15) == toFive + " " + toFifteen) {
  console.log('Test 2 passed');
} else {
  console.log('Test 2 failed');
}

/** Test 3 */
if(fizzbuzz(30) == toFive + " " + toFifteen + " " + toThirty) {
  console.log('Test 3 passed');
} else {
  console.log('Test 3 failed');
}

/** Bonus Test 1 */
if(fizzbuzz(40, 30) == smallPartialSeries) {
  console.log('Bonus Test 1 passed');
} else {
  console.log('Bonus Test 1 failed');
}

/** Bonus Test 2 */
if(fizzbuzz(361, 345) == largePartialSeries) {
  console.log('Bonus Test 2 passed');
} else {
  console.log('Bonus Test 2 failed');
}
