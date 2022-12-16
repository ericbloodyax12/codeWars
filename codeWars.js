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
//#region Square(n) Sum
numbers = [1,2,3,4]
function squareSum(numbers){
    let sum = 0
    let forEachCallBack = (item,index,arr)=>{
        sum += Math.pow(item,2);


    }
    numbers.forEach(forEachCallBack);
    return sum;
}
//endregion Square(n) Sum