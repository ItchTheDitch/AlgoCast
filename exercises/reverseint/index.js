// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    debugger;
    const number = parseInt( n.toString().split('').reverse().join(''));

    return number * Math.sign(n);
}

reverseInt(-9);

module.exports = reverseInt;

// My way
// function reverseInt(n) {
//     debugger;
//     let number = parseInt(n.toString().split('').reverse().join(''))
//
//     if (Math.sign(n) == -1) {
//
//         number = number * - 1;
//
//     };
//     return number;
// }