//function to an object -> array of index locations of each unique character passed into function

function countLetters(phrase) {
    //define variable to take what's passed into the function
    var oneString = phrase;
    //create empty object to hold the output of function
    var library = {};

    for (let i = 0; i < oneString.length; i++) {

        // If it's already in the library, then push to current array the index location, else add to object with array index location
        if(library[oneString[i]]){
            library[oneString[i]].push(i+1);
        } else {
            library[oneString[i]] = [(i+1)];
        }
    }
    console.log(library);
}

countLetters("lighthouse in the house");

