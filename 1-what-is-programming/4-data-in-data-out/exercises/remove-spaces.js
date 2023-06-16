'use strict';

/* Remove Spaces

    This program removes the blank spaces in a string.

  Data In:
    any text containing empty spaces

  Data Out:
    the text 'before' plus the same input text, followed by 'after:' plus the same input text without the empty spaces

  Test Cases:
    '' -> 'before: after:'
    'write something' -> 'before: write something after: writesomething'

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text, all the spaces will be removed');
  console.log(input);
}

/* --- create new data with no spaces --- */

let spaceless = '';
for (let character of input) {
  if (character !== ' ') {
    spaceless = spaceless + character;
    console.log(spaceless);
  }
}

/* --- create a final message --- */

let message = 'before: ' + input + '\nafter: ' + spaceless;
console.log(message);

/* --- display message to the user --- */

alert(message);
