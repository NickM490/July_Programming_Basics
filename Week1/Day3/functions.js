

// the word function
// function name
// need parens ()
// need curly brackets {}


// This is the function to count all the participants in the party
function particCount() {

}

// Outside the scope of the function
// console.log("Hello There!")


// Parameter/Argument: Something that a function can take, something passed into the fuction
// variables that a function will run

function nameOfFunction() {
    // Inside the scope of the function
    // Code To Be Executed
    console.log("Hello There :-)")

}

nameOfFunction()
















function counter(num) {
    num++
    // console.log(num)
    // return num
}

console.log(counter(5))




function calculateTipAmount (billTotal, tipPercent){

    var tipDue = billTotal * tipPercent;
    console.log("If you see this, this is just after tipDue was calculated");
    return tipDue;
    // console.log(tipDue)
}
// calculateTipAmount(140, .20);

var table1 = calculateTipAmount("Walking in the park", 55)
var table2 = calculateTipAmount(350, .15)
console.log("Table 1 tip due: " + table1)
console.log("Table 2 tip due: " + table2)
    

tableSum = table1 + table2
console.log(tableSum)

function createArray(num) {    
    var newArray = [0,1,2,3,4,5];   
    return newArray;        // added the return statement
    }
    var needAnArray = createArray();        // now needAnArray is the variable that is calling on createArray
    







var num = 15;
console.log(num);

function timesTwo(num){
    console.log(num);   
    return num*2;
}


var result = timesTwo(10);
console.log(result);

console.log(num);
    


function timesTwoAgain(num) {
    console.log('num is', num);
    y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);




function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);
