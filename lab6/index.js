// How to fix the code
function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 2) {
        let j = i;
        let shooter = function() {
            console.log(j);
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();
army.forEach(f => f());

//army[0]();
//army[1]();
// 1,b
// 2,b

/*

Question 2
Write a function printNumbers(from, to) that outputs a number every second
starting from 'from' and ending with 'to' using setInterval

*/

function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function() {
        alert(current);
//        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;

    }, 1000);
}

printNumbers(5,10);

/*

Question 3
In the code below, there is a setTimeOut scheduled,
then a heavy calculation is run that takes more than 100ms.

3.a, When will the scheduled function run?
1. After the loop
2. Before the loop
3. In the beginning of the loop

3.b, What is the alert going to show?

Answers
3.a, Any setTimeOut will run after the current code has finished.
    So the scheduled function will run after the loop.

3.b, The alert will show the last i which is 100000000.




*/

function test() {
    let i = 0;
    setTimeout(() => alert(i), 100);

    // assume that time to execute this function is > 100ms
    for(let j = 0; j < 100000000; j++) {
        i++;
    }
}

test();



