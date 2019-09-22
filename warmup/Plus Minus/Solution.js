'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {

    let length = arr.length;
    let positiveNumbers = 0, negativeNumbers = 0, zerosNumbers = 0;

    for (let number of arr) {
        if (number > 0)
            positiveNumbers++;
        else if (number < 0)
            negativeNumbers++;
        else
            zerosNumbers++;
    }

    console.log(positiveNumbers / length);
    console.log(negativeNumbers / length);
    console.log(zerosNumbers / length);

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
