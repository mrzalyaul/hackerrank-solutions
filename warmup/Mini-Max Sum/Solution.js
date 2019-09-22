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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {

    arr = arr.sort((a, b) => a - b);

    let max = 0, min = 0, n = arr.length - 1;

    for (let i = 0; i <= n - 1; i++) {
        min += arr[i];
        max += arr[n - i];
    }

    console.log(min, max);

}

function main() {
    // const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum([1, 2, 3, 4, 5, 6]);
}

main()
