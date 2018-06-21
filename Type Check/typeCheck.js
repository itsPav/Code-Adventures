/****************************************************************************

  INTRODUCTION: The typeCheck challenge
  
    For this Code Adventure, let's explore the concept of data types. Under-
    standing what types are, how they work, and some of their differences can
    really improve your JavaScript understanding and skills. 


  INSTRUCTIONS:
  
    Create the logic for the function called typeCheck. This function will 
    take the following array as an argument. 

      `["This is a string", 42, true, undefined, null, Symbol(), {}]`
    
    Your job is to loop over the argument array, and create and return a new 
    array that stores two objects. The two objects should each list the items 
    from the argument array and their types as key/value pairs. 
    
    For the first object, set the type as the key, and the item itself as the 
    value. 
    
    For the second object, do the opposite. Set the item as the key, and the 
    type as the value. 

    So that:
    
      `typeCheck(["This is a string", 42, true, undefined, null, Symbol(), {}]) === [
        { string: 'This is a string',
          number: 42,
          boolean: true,
          undefined: undefined,
          object: {},
          symbol: Symbol() },
        { '42': 'number',
          'This is a string': 'string',
          true: 'boolean',
          undefined: 'undefined',
          null: 'object',
          '[object Object]': 'object',
          [Symbol()]: 'symbol' }
      ];`

      
    The `typeof` operator will be very helpful here. If you're unfamiliar with 
    that, see what you can find with a Google search.
    
    Completing this task, and carefully inspecting the results will give you a 
    small glimpse into how different types are treated differently in different 
    situations.


  TO RUN THE TESTS:

    type the command below into the console and press enter.

      node typeCheck.js


/** THE FUNCTION ************************************************************/

  const typeCheck = arr => {
    
    // your code goes here
    var object = [];

  }


/** THE OUTPUT **************************************************************/

  console.log('\x1Bc'); // Ever wanted to know how to clean the console? This is the line.
  console.log("Your function's current output:"); 
  console.log(
    
    typeCheck(["This is a string", 42, true, undefined, null, Symbol(), {}]) // this is here for you to use

  );
  console.log("----------------------------------------------------");


/** THE TESTS ***************************************************************/

  const funcResult = typeCheck(["This is a string", 42, true, undefined, null, Symbol(), {}]);

  const objType = val => Object.prototype.toString.call(val);

  const outerArrType = objType(funcResult);
  const firstObjType = objType(funcResult[0]);
  const secondtObjType = objType(funcResult[1]);

  const expectedResultStringified = JSON.stringify(
    [ { string: 'This is a string',
        number: 42,
        boolean: true,
        undefined: undefined,
        object: {},
        symbol: Symbol() },
      { '42': 'number',
        'This is a string': 'string',
        true: 'boolean',
        undefined: 'undefined',
        null: 'object',
        '[object Object]': 'object',
        [Symbol()]: 'symbol' } ]);

  const actualResultStringified = JSON.stringify(funcResult)

  /** Test 1 **/
  if(outerArrType === "[object Array]") {
    console.log('Test 1 passed: you are returning an array');
  } else {
    console.log('Test 1 failed: you are not returning an array');
  }

  /** Test 2 **/
  if(firstObjType === "[object Object]" && secondtObjType === "[object Object]") {
    console.log('Test 2 passed: your array contains two objects');
  } else {
    console.log('Test 2 failed: somethign is wrong one or both of the objects in your array');
  }

  /** Test 3 **/
  if(actualResultStringified === expectedResultStringified) {
    console.log('Test 3 passed: your resulting array of objects matches the expected output');
  } else {
    console.log('Test 3 failed: your resulting array of objects does not match the expected output');
  }
