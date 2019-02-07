// function to take input, create and object, with each unique letter as a key
// each key's value to be a count of occurence in the input

function countLetters(phrase) {
    //remove spaces from input
    var oneString = phrase.split(" ").join("");
    // test -> console.log('oneString ', oneString);
    // empty object to send results to
    var library = {};

    for(let i=0; i < oneString.length; i++) {
        // test -> console.log("char ", oneString[i]);
        //if [i] character exists in object, then add one to counter, else add to object with a value of one
        if(library[oneString[i]]) {
            library[oneString[i]]++;
        } else {
            library[oneString[i]] = 1;
        }
    }
    return library;
}
var result = countLetters("lighthouse in the house");


//printed horizontally from above function. Probably ok, but to get closer match to answer in Compass, formatted to get it vertially

function format(result){
    var str = "{ "
    for(let key in result) {
        // key
        // result[key]
        //str += "\n" + key + ": " + result[key] + ", \n"
        str += `\n${key}: ${result[key]}, \n`
    }
    str += "}"
    return str;
}

console.log(format(result))


