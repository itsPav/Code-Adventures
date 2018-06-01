/****************************************************************************
    
  The Mirrored Parenthetical challenge

  INTRODUCTION: 
  
    For this Code Adventure let's take a string that includes letters, numbers, 
    and sets of parentheses, and reverse all the characters inside of the paren-
    theses, working from the middle out, removing the parens as we go.


  INSTRUCTIONS:
  
    Create the logic for the function called mirPar. This function will take 
    1 string argument. The string will contain alphanumeric characters along 
    with sets of parentheses. You can count on complete sets of parentheses 
    existing in the string, for example, for every opening parenthesis, there 
    will be an accompanying closing parenthesis.
    
    Your job is to reverse the characters contained within each set of parens, 
    starting with the innermost pair. If there are multiple inner pairs, then 
    those will have their characters reversed before you do the reversing on the 
    outer pairs of parens. After reversing the charcters, you'll want to remove 
    the parens, and return the new string.
    
    So that:
    
      `mirPar("((house)(tree))") === "treehouse";`
      
      You see, to begin with, the first inner pair of parenthesis, `house`, 
      gets reversed into `esuoh`. Then the next inner pair of parens,`tree`, 
      gets reversed to `eert`. Together these make the string `eertesuoh`. And 
      then because of the outer set of parens, the whole string gets reversed 
      to `treehouse`.


  TO RUN THE TESTS:
  
    type the command below into the console and press enter.

      node mirPar.js


/** THE FUNCTION ************************************************************/

  const mirPar = s => {
    
    // your code goes here
    var brackets = [];
    var stringStart = 0;
    var stringEnd = 0;

    for(let i = 0; i < s.length; i += 1) {
      if(s[i] == "(" && s[i+1] != '(') 
        stringStart = i+1;
      if(s[i] == ")" && s[i-1] != ')') 
        stringEnd = i-1;
    }

    function reverseString(start, end)
    {
      
    }

    var set = brackets.length / 2;
    // reverse the strings between brackets



    // need to check if brackets aren't beside each other
    // have to somehow figure out if the brackets are contained in other brackets
    // ((asdasd)) or (asdasd)(asdasdas)((asdasd)(asdasd)) or (asd)

    // reverse string in each set of brackets
    for(let i = 0; i < set; i += 1) {

    }

    // remove the brackets after reverse
    
  }


/** THE OUTPUT **************************************************************/

  console.log('\x1Bc'); // Ever wanted to know how to clean the console? This is the line.
  console.log("Your function's current output:"); 
  console.log(
    
    // these are here for you to use
    mirPar("((life)()(4)()(code))"), 
    mirPar("((house)(tree))")

  );
  console.log("----------------------------------------------------");


/** THE TESTS ***************************************************************/

  /** Test 1 **/
  if(mirPar("ab(cd)ef") === "abdcef") {
    console.log(`Test 1 passed: String 'ab(cd)ef' returns '${mirPar("ab(cd)ef")}'.\n`);
  } else {
    console.log(`Test 1 failed: String 'ab(cd)ef' returns '${mirPar("ab(cd)ef")}'.\n`);
  }

  /** Test 2 **/
  if(mirPar("ab(cd)ef(gh)") === "abdcefhg") {
    console.log(`Test 2 passed: String 'ab(cd)ef(gh)' returns '${mirPar("ab(cd)ef(gh)")}'.\n`);
  } else {
    console.log(`Test 2 failed: String 'ab(cd)ef(gh)' returns '${mirPar("ab(cd)ef(gh)")}'.\n`);
  }

  /** Test 3 **/
  if(mirPar("((house)(tree))") === "treehouse") {
    console.log(`Test 3 passed: String '((house)(tree))' returns '${mirPar("((house)(tree))")}'.\n`);
  } else {
    console.log(`Test 3 failed: String '((house)(tree)))' returns '${mirPar("((house)(tree))")}'.\n`);
  }

  /** Test 4 **/
  if(mirPar("((life)()(4)()(code))") === "code4life") {
    console.log(`Test 4 passed: String '((life)()(4)()(code))' returns '${mirPar("((life)()(4)()(code))")}'.\n`);
  } else {
    console.log(`Test 4 failed: String '((life)()(4)()(code))' returns '${mirPar("((life)()(4)()(code))")}'.\n`);
  }

