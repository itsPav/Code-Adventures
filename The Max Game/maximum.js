/**
  Description: The "Max" Game
  
  Step right up and try your hand at the "Max" game. You will be presented 
  with an array of boxes containing an unknown amount. You get to pick one 
  and keep whatever is inside. But to make things interesting, you can't 
  see how much is in the boxes. Fortunately, you can use some basic JavaScript 
  to check the values of each box to ensure that you are selecting the box 
  with the highest number, and therefore the biggest payday. Huzzah! :) 
  
  A function called "maximium" has already been created for you below. Write 
  your own code inside the function to make it work. The function will take 
  an array of numbers as an argument. Your job is to find the largest number 
  in the array and return it as the result, so that:
  
  maximum([1, 2, 3, 4, 5]) will return 5
  
  Note: This is very easily done with one line of javascript and the "Math.max" 
  method. However, to get the most out of this experience, avoid compressed 
  solutions that use built in methods. Keeping to for loops, if blocks, 
  concatenation, and other simple, low level techniques will give you a 
  greater understanding of not only how those built-in methods work, but how 
  problems are solved in JavaScript and programming in general.
**/



/** The Function */
function maximum(array) {
  
    // your code goes here 
    let highest = 0;

    array.forEach(element => {
      if(element > highest)
        highest = element;
    });
    
    return highest;
  }
  
  
  /* The Output: These log statements are for feedback and debugging */
  console.log('\x1Bc'); // Ever wanted to know how to clean the console? This is the line.
  console.log("Your function's current output:"); 
  console.log(
  
  maximum([1, 2, 3, 4, 5]) // You can use and edit this array for debugging.
                           
  );
  console.log("----------------------------------------------------");
  
  
  
  
  
  /** The Tests: Do Not Modify Anything Below */
  
  /** Test 1 */
  if(maximum([1, 2, 3, 4, 5]) == 5) {
    console.log('Test 1 passed');
  } else {
    console.log('Test 1 failed when array is in order: [1, 2, 3, 4, 5]');
  }
  
  /** Test 2 */
  if(maximum([5, 4, 3, 2, 1]) == 5) {
    console.log('Test 2 passed');
  } else {
    console.log('Test 2 failed when array is in reverse order: [5, 4, 3, 2, 1]');
  }
  
  /** Test 3 */
  if(maximum([3, 1, 5, 2, 4]) == 5) {
    console.log('Test 3 passed');
  } else {
    console.log('Test 3 failed when array is unsorted: [3, 1, 5, 2, 4]');
  }
  
  /** Test 4 */
  if(maximum([4, 1, 5, 2, 4, 3]) == 5) {
    console.log('Test 4 passed');
  } else {
    console.log('Test 4 failed when array has duplicate numbers: [4, 1, 5, 2, 4, 3]');
  }
  
  /** Test 5 */
  if(maximum([3, 1, -5, 2, 4]) == 4) {
    console.log('Test 5 passed');
  } else {
    console.log('Test 5 failed when array has negative numbers: [3, 1, -5, 2, 4]');
  }
  