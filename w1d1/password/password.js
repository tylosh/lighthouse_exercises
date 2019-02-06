/*
Write a program named password.js that takes a single string as a command line argument. Within your program, write a function definition for a function named obfuscate that takes a string as an argument and obfuscates it by applying the following rules.

Every "a" in the string should be replaced with a "4".
Every "e" in the string should be replaced with a "3".
Every "o" (oh) in the string should be replaced with a "0" (zero).
Every "l" (el) in the string should be replaced with a "1" (one).

*/

//function to obfuscate string, not to read from argv directly
function obf(char){
 if(char.toLowerCase() === "a") {
   return 4;
 }
 else if(char.toLowerCase() === "e") {
   return 3;
 }
 else if(char.toLowerCase() === "o") {
   return 0;
 }
 else if(char.toLowerCase() === "l") {
   return 1;
 }
 else{
   return char;
 }
}

//read from command line and pass to obf function
function read(){
 var args = process.argv;
 var final = '';

 for(var i = 0; i < args[2].length; i++){
   final += obf(args[2].charAt(i));
 }

 return final;
}

console.log(read());





/*


function obf (pass) {
  output = ''
  var n = pass.length
    for (var i = 0; i < n; i++) { //this seems to have the correct loop
      if (pass.charAt(i) === 'a') {
        console.log(pass.charAt(i))
        output += 4
        console.log ('-------', output)
      }
      else if (pass.charAt(i) === 'e') {
        output += 3
      }
      else if (pass.charAt(i) === 'o') {
        return 0
      }
      else if (pass.charAt(i) === 'l') {
        return 1
      }
      else {
      pass.charAt(i)
    }
    return output + pass.length
    }
}


//read from argv and pass to obf
function read(){
 var args = process.argv;
 var final = “”;

 for(var i = 0; i < args[2].length; i++){
   final += obf(args[2].charAt(i));
 }


 return final;
}

console.log(read());

*/

//console.log(pass.length)

//console.log(obf('password'))


// try this method maybe ? https://www.w3schools.com/js/js_switch.asp




/*

function obf (pass) {


  if (pass() === 'a') {
    console.log('-----',pass)
    return 4;
  }
  else if (pass() === 'e') {
    return 3;
  }
  else if (pass() === 'o') {
    return 0;
  }
  else if (pass() === 'l') {
    return 1;
  }
  else {
    return pass;
  }
}





console.log(obf('password'))

*/




