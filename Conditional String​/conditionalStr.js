/****************************************************************************
    
  FSJS Project 1 - Conditional String

  INTRODUCTION: 
  
    Let's build a conditional string. In the first project of the Full Stack 
    Techdegree, you will need to create a function that will take in an object 
    as an argument, and then produce a string based on the properties the object 
    does or does not contain. This code challenge is meant to help walk you 
    through how to do that.


  INSTRUCTIONS:
  
    Below you will find and empty function called conditionalStr. This function 
    will take 1 obejct as an argument, which has already been created for you, 
    so you don't need to worry about that part.  ** NOTE** - Remember, when we 
    first define a function, we can give it a "parameter", which is like a var-
    iable, or a placeholder for the "argument" we will later pass in when we 
    call or "invoke" the function.
    
    Your job is to create the logic for the conditionalStr function so that it 
    checks if certain properties exist in the object argument, and if they do, 
    they get added to a string stored in a variable you create, which will get 
    returned at the end of function.
    
    Here are the steps involved:
    
      1) Create a variable that stores an empty string. An empty string looks
         like this, "".
      
      2) Use 3 if statements to check if the object has certain properties.
      
          Here are the properties you will be checking for.
      
            string_start 
            string_middle
            string_end
      
      3) If a property exists, add or "concatenate" it to the string stored in 
         the variable that you created. 
      
      4) Return the string.
    
    The conditionalStr function below also has built in comments to help walk you 
    through these steps.
    

  TO RUN THE TESTS:
    type the command below into the console and press enter to see if your code passes.

      node conditionalStr.js
      
*****************************************************************************/


/** THE FUNCTION ************************************************************/

function conditionalStr(obj) {
    
    // Create a variable to store an empty string
    var emptyStr = '';
    
    // Use an if statement to check if obj has a property called string_start
    // If so, add it to the string variable you created above
    if(obj.hasOwnProperty('string_start')){
        emptyStr += obj.string_start;
    }
        
    // Use an if statement to check if obj has a property called string_middle
    // If so, add it to the string variable you created above
    if(obj.hasOwnProperty('string_middle')){
        emptyStr += obj.string_middle;
    }
       
    // Use an if statement to check if obj has a property called string_end
    // If so, add it to the string variable you created above
    if(obj.hasOwnProperty('string_end')){
        emptyStr += obj.string_middle;
    }
    
    // Return the complete string variable you created above
    return emptyStr;
  }


/** CODE/TEST BORDER - DO NOT CHANGE ANYTHING BELOW THIS LINE ****************/

/** CODE TO USE WHEN TESTING *************************************************/

/** Test array **/
const array_of_objects = [
  {
    string_start: `This is object one.`
  },
  {
    string_start: `This is object two. `,
    string_middle:  `But its index is 1.`
  },
  {
    string_start: `This is object three. `,
    string_middle:  `But its index is 2. `,
    string_end: `Using box notation, it is called with, array_of_objects[2].`
  }
];

/** Test function for returning radnom object from test array **/
const random_object = obj => obj[Math.ceil(Math.random() * obj.length - 1)];


/** THE OUTPUT LOGS *********************************************************/

  console.log('\x1Bc'); // Ever wanted to know how to clean the console? This is the line.
  console.log("Your function's current output:"); 
  console.log(conditionalStr(random_object(array_of_objects)));
  console.log("----------------------------------------------------");


/** THE TESTS ***************************************************************/
  
  /** Test string **/
  let testString = conditionalStr(random_object(array_of_objects));

  /** Test condtionals and logs statements **/
  if(testString.includes("one")) {
    if (testString.length === 19) {
      console.log("Congrats! Your code passed the test.");
    } else {
      console.log("It looks like the string your fucntion is producing is either too short or too long");
    }
  } else if (testString.includes("two")) {
    if (testString.length === 39) {
      console.log("Congrats! Your code passed the test.");
    } else {
      console.log("It looks like the string your fucntion is producing is either too short or too long");
    } 
  } else if (testString.includes("three")) {
    if (testString.length === 101) {
      console.log("Congrats! Your code passed the test.");
    } else {
      console.log("It looks like the string your fucntion is producing is either too short or too long");
    }
  }