// function countLetters(phrase) {
//     var oneString = phrase.split(" ").join("");
//     // console.log(oneString);
//     var library = {
//     }
//     indexCheck(oneString);

//     function indexCheck(reader) {
//         for (i = 0; i < reader.length; i++) {
//             // console.log(reader[i])
//             if (!(reader[i] in library)) {
//                 // console.log("it doesn't exist")
//                 var index = reader[i];
//                 var libr

//                 console.log(index);
//                 // library["index"] = 0;
//                 // library["index"]++;
//                 // console.log(library["index"])
//             } else {
//                 // console.log("it does exist")
//                 // console.log(library.o)
//             }
//         }
//     }

//     return library;
// }
// // console.log(oneString);
// // console.log(library);
// // console.log(reader());



// // console.log(countLetters("lill"));
//console.log(countLetters("lighthouse in the house"));



function countLetters(phrase) {
    var oneString = phrase.split(" ").join("");
    // console.log('oneString ', oneString);
    var library = {};

    for(let i=0; i < oneString.length; i++) {
        // console.log("char ", oneString[i]);
        if(library[oneString[i]]) {
            library[oneString[i]]++;
        } else {
            library[oneString[i]] = 1;
        }
    }
    return library;
}
var result = countLetters("lighthouse in the house");

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
// console.log(result);


