


// need variable first, then condition, then increment on for loops
for (var num = 0; num <= 5; num++) {
    console.log("First For Loop!   " + num + " is the variable.")
    console.log("**********************************************");
    console.log("***********  loop.js Line 8    ***************");
    console.log("**********************************************");
}


//*********************************************************
//***********    Login Functionality    *******************
//*********************************************************
// This is for adding the user to the DB from registration page
for (var i = 0; i <= 5; i++) {
    console.log(i)
}

for (var p = 0; p <= 5; p++) {
    console.log(p)
}

function incNum() {
    for (var i = 0; i <= 5; i++) {
        if(i == 5) {
            console.log(i)
        }
    }
}

incNum()


// For loop can be set for a certain amount of times 
// until a condition is met
for(var a = 5; a > 0; a--) {
    a = a-2
    console.log(a)
    // console.log("After the second change " + a)

}

var myArray = ["Geralt", "Siri", "Voldie", "Hank"]
for (var i = 0; i <= 0; i++) {
    console.log(myArray[i])
}
// While loop will operate as long as a condition exists
var health = 100
function hit() {
    health-=25
}




var myArray = ["Geralt", "Siri", "Voldie", "Hank"]

while(myArray) {
    console.log("This thing")
}

var word = true
while(word == true) {
    console.log("True")
}


var isAlive = true











while(health > 0) {
    console.log("still alive")
}

function fight() {
    var health = 100
    for(var i = 0; i <= 10; i++) {
        while(health > 0 ) {
            console.log("Got Hit, but still alive")
            health -= 25
        }
        console.log("Got hit hard, now ded")
    }
}

fight()






var arr = [];
var arr2 = [];
var arrcomb =[];
var randNum = Math.random() * 4;

for(var i = 0; i < 10; i++){
    arr.push(Math.floor(randNum));
    randNum = Math.random() * 4;
}
for(var i = 0; i < 10; i++){
    arr2.push(Math.floor(randNum));
    randNum = Math.random() * 4;
}
arrcomb.push(arr, arr2);
console.log(arr);
console.log(arr2);
console.log(arrcomb);