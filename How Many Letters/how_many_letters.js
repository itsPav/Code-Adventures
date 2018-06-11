const assert = require("assert");

/*** 
  The Challenge - How Many Letters
  
  Introduction:

    Your friend Guten has recently bought an old manual printing press 
    and would like to be able to make some flyers. The problem is with 
    these old presses is that individual dies must be used for each 
    letter on the page. While Guten doesn't mind putting in the letters 
    by hand, he would like to know how many of each letter he is going 
    to need.

    That's where you come in. 
  
  
  Instructions:

    Guten would like you to write a function that takes one string of 
    letters as an argument. The function should count how many times each 
    letter appears in the string, and store the results in an object with 
    the letters as keys, and the number of occurences of each letter as 
    the values. To complicate things, Guten's set of dies only contains 
    lowercase letters, (Bummer!) so you'll need to make sure all letters 
    in the string are lowercase letters before finally returning the object 
    of letter occurences.

    For example, 
  
      the string `abcaa` should return `{ a: 3, b: 1, c: 1}` 
    
      the string `zYxyZ` should return `{ z: 2, y: 2, x: 1}`
  
      and the string `''` should return `{}`. 


  The run the tests:

    Type `npm test` in the console below to see if all the tests pass.
  
***/


/*** 
  countLetters returns an object of the letters contained in a string 
  argument, and how many times they occur.
  @param string of letters
***/

const countLetters = string => {
  // TODO: Add your code here  

  var lettersArray = [];
  var totalLetters = {};

  string.split('').forEach(letter => {
    var count = 0;

    // check if letter was already counted
    if(lettersArray.indexOf(letter) == -1) {
      string.split('').forEach(element => {
        if(element == letter) {
          count += 1;
        }
      });
      lettersArray.push(letter);
      totalLetters[letter] = count;
    }
  });
  return totalLetters;
}

// Please don't change anything past this line!
/*  Tests =================== */

// clear the console
console.log('\x1Bc');
console.log("Your function's current output:"); 
  console.log(
    
    countLetters(`Treehouse`) // this is here for you to use

  );
  console.log("----------------------------------------------------");

// perform tests
describe('#countLetters()', function() {
  describe('Count with values', function () {
    it('"aba" should return {a: 2, b: 1}', function () {
      assert.deepStrictEqual(countLetters("aba"), {a: 2, b: 1});
    });
    it('"abaccafa" should return {a: 4, b: 1, c: 2, f:1 }', function () {
      assert.deepStrictEqual(countLetters("abaccafa"), {a: 4, b: 1, c: 2, f: 1});
    });
    it('"abDadcafda" should return {a: 4, b: 1, d: 3, c: 1, f: 1 }', function () {
      assert.deepStrictEqual(countLetters("abDadcafda"), {a: 4, b: 1, d: 3, c: 1, f: 1});
    });
  });
  describe('Count without values', function () {
    it('"" should return {}', function () {
      assert.deepStrictEqual(countLetters(""), {});
    });
  });
})