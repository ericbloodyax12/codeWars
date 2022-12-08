//codeWars katas

//region Remove exclamation marks
let s = "!hellow !world!"
function removeExclamationMarks(s) {
    let newString = '';
    for(let i=0; i<s.length; i++) {
        if(s[i] !== '!') {
            newString += s[i]
        }
    }
    return newString;
}
console.log(removeExclamationMarks(s));
//endregion
