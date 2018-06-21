/****************************************************************************

  INTRODUCTION: The simple calculator challenge
  
    For this Code Adventure, we're going to create a simple calculator that 
    can add, subtract, multiply, and divide any two numbers. We want to be 
    able to perform all of these operations with a single function. But we 
    have a small problem. We can't pass an operator as an argument to a 
    function. So we need to get clever with our code to work around this 
    limitation.


  INSTRUCTIONS:
  
    Create the logic for the function called `calculator`. This function will 
    take three arguments, two numbers and a string representing an operator. 
    The string will be either "add", "subtract", "multiply" or "divide".
    
    Your job is to make the `calculator` function take the two numbers, perform 
    the operation that is represented by the string, and return the result.
    
    So that:
    
      `calculator(2, 2, "add") == 4;`
  
  
  BONUS CHALLENGE 1:
  
    As an extra challenge, add functionality to your `calculator` function to 
    support the remainder operator, sometimes called the modulo or modulus 
    operator. This operator does just what it sounds like it does. It returns 
    the remainder that is left over after dividing two numbers, even if that 
    remainder is zero. 
    
    So that:
    
    `calculator(2, 2, "remainder") == 0;`
    
     -OR-
    
    `calculator(10, 3, "remainder") == 1;`


  BONUS CHALLENGE 2:
  
    And for desert, add the logic to the `primes` function below. This function 
    will take a single number as an argument, and return an array containing 
    all the prime numbers that exist between zero and the number passed in. 
    Remember, a prime number is any number greater than 1 that is only divisible 
    by 1 and itself.
    
    So that:
    
    `primes(10) == [2, 3, 5, 7];`

    
  TO RUN THE TESTS:
    type the command below into the console and press enter.

      node calculator.js


/** THE FUNCTION ************************************************************/

function calculator(num1, num2, operator) {
    
    // your code goes here

    switch (operator) {
        case "add":
            return num1 + num2;
            break;

        case "subtract":
            return num1 - num2;
            break;

        case "multiply":
            return num1 * num2;
            break;

        case "divide":
            return num1 / num2;
            break;

    // Bonus challenge 1    
        case "remainder":
            return num1 % num2;
            break;

        default:
            break;
    }
  }

  // Bonus challenge 2
  function primes(num) {
    var arr = [];

    for(var i = 0; i < num; i++){
      if(isPrime(i)) 
        arr.push(i);
    }

    return arr;
    
  }

  function isPrime(num) {
    if(num < 2) 
      return false;

    // to check for a prime number, we don't need to divide it by itself, hence the i < num
    // instead, we start from 2 and count up
    // since i = 2 and 2 < 2, the loop never runs and 2 is added to the array
    // when we check 3, 3%2 != 0, and it gets added.
    // then we check 4, which is false
    // then 5, which is true
    // then 6 which is false and so on
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    
    return true;
  } 


/** THE OUTPUT **************************************************************/

  console.log('\x1Bc'); // Ever wanted to know how to clean the console? This is the line.
  console.log("Your function's current output:"); 
  console.log(
    
    calculator(2, 2, "add") // this is here for you to use

  );
  console.log("----------------------------------------------------");


/** THE TESTS ***************************************************************/

  /** Test 1 **/
  if(calculator(2, 2, "add") == 4) {
    console.log('Test 1 passed');
  } else {
    console.log('Test 1 failed');
  }

  /** Test 2 **/
  if(calculator(2, 2, "subtract") == 0) {
    console.log('Test 2 passed');
  } else {
    console.log('Test 2 failed');
  }

  /** Test 3 **/
  if(calculator(2, 2, "multiply") == 4) {
    console.log('Test 3 passed');
  } else {
    console.log('Test 3 failed');
  }

  /** Test 4 **/
  if(calculator(2, 2, "divide") == 1) {
    console.log('Test 4 passed');
  } else {
    console.log('Test 4 failed');
  }

  /** Bonus Challenge 1 Test **/
  if(calculator(2, 2, "remainder") == 0) {
    console.log('Bonus challenge 1 test passed');
  } else {
    console.log('Bonus challenge 1 test failed');
  }

  /** Bonus Challenge 2 Test **/
  if(primes(10).join(", ") == "2, 3, 5, 7") {
    console.log('Bonus challenge 2 test passed');
  } else {
    console.log('Bonus challenge 2 test failed');
  }
