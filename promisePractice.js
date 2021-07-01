
const readlineSync = require('readline-sync');

/*********************************************/
/*   I am aware it's very bad to use eval   */
/*******************************************/

//1) Creating a promise with the oldest syntax
function CheckChar(char) {

    return new Promise(function(resolve, reject) {

       eval(char) ? resolve (char +` is truthy`) : reject (char +` is falsy`);
    });
}

const input = readlineSync.question("Enter a Value to heck if it's truthy or falsy...   ");

// Using the promise
CheckChar(input)

.then(function(result) {
    console.log(result)
})

.catch(function(error){
    console.log(error)
});


//2) Braking down the promise concept

function success(result) {
    console.log("Success! " + result);
}

function failure(error) {
    console.log("Failure :( " + error);
}

function checkNumber() {

    const num = readlineSync.question("Enter a number bigger then 5  ");

    return ((Number(num) > 5) ? num + ' Is bigger then 5' : num + ' Is not bigger then 5');
}

const result = checkNumber();

console.log(result);
success(result);
failure(result);
