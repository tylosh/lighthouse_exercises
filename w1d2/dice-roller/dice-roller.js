//Write a program that takes a single parameter from the command line, a number, and rolls that many six-sided dice. For example, the following is a sample output of the program.


//need to get a string of random #'s' b/w 0 and 6
//count of numbers in string based on number inputted into terminal

var numberOfDice = process.argv[2] //pass on the number from Terminal

function diceOutput (numberDice) {
  var result = '';
  for (var i = 0; i < numberDice; i++) {
    //add number to string
    //make the number b/w 0 and 6
    //make the number randomly generate

    if(i !== numberDice -1) {
      result += (Math.floor(Math.random() * 6) + 1) + ", "
    }
    else {
      result += + (Math.floor(Math.random() * 6) + 1)
    }
  }
  return 'Rolled ' + numberOfDice + " dice: " + result //return string from the loop
}

console.log(diceOutput(numberOfDice))




//console.log(numberOfDice)
//console.log(Math.floor(Math.random() * 6) + 1)
