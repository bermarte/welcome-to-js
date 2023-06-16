'use strict';

/* Mirror

  This program reverses a string.

  Data In:
    any text

  Data Out:
    the reversed string, plus a vertical slash, and the original string

  Test Cases:
    '12345' -> '54321 | 12345'
    'a programming language' -> 'egaugnal gnimmargorp a | a programming language'

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to mirror');
  console.log(input);
}

/* --- create mirrored text --- */

let mirrored = ' | ';
for (let character of input) {
  mirrored = character + mirrored + character;
  console.log(mirrored);
}

/* --- display mirrored text to the user --- */

alert(mirrored);
