/*
Write a program named password.js that takes a single string as a command line argument. Within your program, write a function definition for a function named obfuscate that takes a string as an argument and obfuscates it by applying the following rules.

Every "a" in the string should be replaced with a "4".
Every "e" in the string should be replaced with a "3".
Every "o" (oh) in the string should be replaced with a "0" (zero).
Every "l" (el) in the string should be replaced with a "1" (one).

*/

function obf (pass) {
  output = ''
  var n = pass.length
    for (var i = 0; i < n; i++) { //this seems to have the correct loop
      if (pass.charAt(i) !== 'a' || pass.charAt(i) !== 'e' || pass.charAt(i) !== 'o' || pass.charAt(i) !== 'l') {
        output = output + pass.charAt(i)
      }
      else {
    output = output + 'A'
    }
    return output + pass.length
    }
}

//console.log(pass.length)

console.log(obf('password'))


// try this method maybe ? https://www.w3schools.com/js/js_switch.asp