'use strict';

/* Flip Five
    
    This program reverses the input only if it is 5 characters long.

  Data In:
    a string that is 5 characters long

  Data Out:
    the reversed string, if the input is 5 characters long
    the message 'nope, try again', if the input string is other than 5 characters long or if the user pressed cancel

  Test Cases:
    '' -> 'nope, try again'
    'robin' -> 'nibor'
    'too long' -> 'nope, try again'

*/

/* --- gather user input --- */

let input = null;
while (true) {
  input = prompt('enter something with 5 characters and it will be reversed.');
  console.log(input);

  /* --- check that the user input is 5 characters long --- */

  if (input !== null && input.length === 5) {
    break;
  } else {
    alert('nope, try again.');
  }
}

/* --- create the final message --- */

let message = '';
for (let character of input) {
  message = character + message;
}
console.log(message);

/* --- display the message --- */

alert(message);
