// Write the necessary Node script to make this code work for all arrays: 
// [1,2,3,4,5,6,7,8].even(); // [2,4,6,8] [1,2,3,4,5,6,7,8].odd(); // [1,3,5,7] 
// Test your code in Node.JS CLI

function even(array){
    return array.filter(number => number % 2 == 0);
}

const arr = [1,2,3,4,5,6,7,8];
console.log(even(arr));

function odd(array){
    return array.filter(number => number % 2 == 1);
}

const arr1 = [1,2,3,4,5,6,7,8];
console.log(odd(arr1));