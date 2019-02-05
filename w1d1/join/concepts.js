/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)

 // loop through array, concatenate values + " ," unless final index of the array


var concepts = joinList(conceptList);

// Write your code here...


  // a string of all array items, by looping through array
  // string = '' | initital string is blank
  // loop through and + array items together with comma
  // * if it's the last item, no comma

function joinList (conceptList) {

  var string = ''

// if conceptList.Length - i = index number then no comma
  for (var i = 0; i < conceptList.length; i++) {
    var value = conceptList[i]
    if (i !== conceptList.length - 1) {
      string += value + ', ';
    } else {
      string += value;
    }
  }
  return string
}

console.log("Today I learned about " + concepts + ".");

