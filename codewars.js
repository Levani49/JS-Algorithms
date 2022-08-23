// Simple, remove the spaces from the string, then return the resultant string.
// function noSpace(x) {
//     return x.split(' ').join('')
// }
// console.log(noSpace(' aaa  asafv v '))


// Your boss decided to save money by purchasing some cut - rate optical
// character recognition software
// for scanning in the text of old novels
// to your database.At first it seems to capture words okay, but you
// quickly notice that it throws in a lot of numbers at random places in the text.

// Examples(input - > output)
// '! !' - > '! !'
// '123456789' - > ''
// 'This looks5 grea8t!' - > 'This looks great!'

// function stringClean(s) {
//     var arr = s.split('');
//     var res = arr.filter((n) => n != parseInt(n)).join('');
//     return res
// }
// console.log(stringClean('This looks5 grea8t!'))

// Write a method, that will get an integer array as parameter and will process 
// every number from this array.

// Return a new array with processing every number of the input - array like this:

//     If the number has an integer square root, take this, otherwise square the number.

// Example
//     [4, 3, 9, 7, 2, 1] - > [2, 9, 3, 49, 4, 1]
// function squareOrSquareRoot(array) {
//     var resultArr = [];

//     for (let i = 0; i < array.length; i++) {
//         var numb = array[i]

//         if (Math.sqrt(numb) == Math.floor(Math.sqrt(numb))) {
//             resultArr.push(Math.sqrt(numb))
//         } else {
//             resultArr.push(Math.pow(numb, 2))
//         }
//     }
//     return resultArr;
// }
// console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]))

// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1
// function sameCase(a, b) {
//     if (a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()) {
//         return -1
//     } else if ((a === a.toUpperCase() && b === b.toUpperCase()) || (a === a.toLowerCase() && b === b.toLowerCase())) {
//         return 1
//     } else {
//         return 0
//     }
// }
// console.log(sameCase('0', '1'))


//replace all dots with '-'.
// var replaceDots = function(str) {
//     var signsArr = str.split('');
//     for (let i = 0; i < signsArr.length; i++) {
//         if (signsArr[i] === '.') {
//             signsArr[i] = '-'
//         }
//     }
//     return signsArr.join('')
// }
// console.log(replaceDots('one.two.three'))


//merge two arrays and delete duplicates
// function mergeArrays(arr1, arr2) {
//     if (arr1.length == 0 && arr2.length == 0) return [];

//     var removeDupl = new Set(arr1.concat(arr2))
//     var deletedDupl = [...removeDupl]
//     return deletedDupl.sort(asc);

//     function asc(a, b) {
//         return a - b
//     }
// }
// console.log(mergeArrays([1, 2, 5, 1, 3, 4, 2, 5], [6, 7, 11, 8, 9, 10]))


//object oriented piracy
// function Ship(draft, crew) {
//     this.draft = draft;
//     this.crew = crew;
// }

// Ship.prototype.isWorthIt = function() {
//     if (this.draft - (this.crew * 1.5) > 20) {
//         return true;
//     } else {
//         return false;
//     }
// }

// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// function oddCount(n) {
//     let oddNumbers = [];
//     for (let i = 1; i < n; i += 2) {
//         oddNumbers.push(i)
//     }
//     return oddNumbers
// }
// console.log(oddCount(7))

// function sayHello(name, city, state) {
//     var fullName = name.join(' ').toString();
//     return `Hello, ${fullName}! Welcome to ${city}!, ${state}!`
// }
// console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))]

// function toCsvText(array) {
//     return array.join('\n');
// }
// console.log(toCsvText([
//     [0, 1, 2, 3, 4],
//     [10, 11, 12, 13, 14],
//     [20, 21, 22, 23, 24],
//     [30, 31, 32, 33, 34]
// ]))


//remove every second element from an array
// function removeEveryOther(arr) {
//     let firstElements = [];
//     for (let i = 0; i < arr.length; i += 2) {
//         firstElements.push(arr[i])
//     }
//     return firstElements;
// }
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, ]))

// Given an array of numbers, check if any of the numbers are the character codes for 
// lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.