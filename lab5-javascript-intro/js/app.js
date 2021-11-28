/*
Create a function using function declaration named sum with one parameter of Array type, the
returned result is the sum of all elements which are greater than 20.
*/
function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] > 20)
            sum += array[i];
    }
    return sum;
}

const arrayOfInts = [1, 23, 31, 4, 20];
console.log("sum([1, 23, 31, 4, 20]) returns " + sum(arrayOfInts));

/*
Create a function using function expression named getNewArray with one parameter of String
Array, return a new array which contains all string, length is greater than and equal to 5, and
contains letter ‘a’.
*/
function getNewArray(array) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
            if(array[i].length >= 5 && array[i].includes('a'))
                newArray.push(array[i]);
        }
    return newArray;
}

const arrayOfWords = ["Banana", "Orange", "Apple", "Mango", "Pie", "Berry"];
console.log("getNewArray(Banana, Orange, Apple, Mango, Pie, Berry) returns " + getNewArray(arrayOfWords));
