// Time to make some arrays


var user = ["Dwight", "Schrute", "beetsbears@battlestar.com", "Something Else"];


// console.log(user.length)

// console.log(user[0])

// for(var i = 0; i <= user.length; i++) {

//     console.log(i)
//     console.log(user[i])
// }

// function pop() {

// }

// pop()

user.push("Look I am new")
console.log(user)
user.pop(user[2])
console.log(user)

var myArray = []
console.log(myArray)


function numsToArray() {
    var numArray = []
    for(var i = 0; i <= 100; i++) {
        numArray.push(i)
    }
    console.log(numArray)
}

numsToArray()

function printArray(arr) {
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

var array1 = ["Geralt", "Siri", "Triss", "Yenn", "Girl with the black hair"]

printArray(user)

// Function that will take in an array and console log whether or not the array contains a given value

function takeArr(array, value){

    for (var i = 0 ; i < array.length ; i++) {

        if(array[i] == value) {
        console.log("The value " + value + " is present in the array at index : " + i)
        } 

        else { 
            console.log("The value " + value + " is not present in the array.")
        }

    }
}


var tryArr = [1, 2, 4, 7, 9, 13];
takeArr(tryArr,5)




function printArray (arr) {

    var isPresent = false

    for(var i = 0; i < arr.length; i++) {
        if(isPresent == true) {
            console.log("This variable is in the list at index position " + i);
            return
        }

        if(arr[i] == 7){
            isPresent = true
            
        }
        
        
        
    }
    console.log("This variable is not in the list.");
}
var tryArr = [1, 2, 4, 9, 9, 13];
// var array = [];
printArray(tryArr);



function takeArr(array, value){

    // for (var i = 0 ; i < array.length ; i++) {

        if(array.includes(value)) {
        console.log("The value " + value + " is present in the array at index : " + array.indexOf(value) )
        } 
        else {
            console.log("Ah ah ah, you didnt say the magic word!")
        }
        
    // }
}


var tryArr = [1, 2, 4, 7, 9, 13];
takeArr(tryArr,13)



var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;

for(var i = 1; i < arr.length; i = i + 2) {
    console.log("The var i is " + i)
    sum = sum + arr[i];
    console.log("This is the array info " + arr[i]);
    console.log("This is the var sum : " + sum);
}

