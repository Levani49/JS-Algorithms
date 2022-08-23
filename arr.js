// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
// const n = 3
// const a = [11, 33, 49, 20, 5, 61, 70, ]

// function findElement(a) {
//     let index = a.splice(n, 1)
//     return parseFloat(index)
// }
// console.log(findElement(a))

// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

// const arr = [1, 2, 3, 4, 5, 6, 7, 8]

//with for loop
// let newArr = []

// for (let i = 3; i < arr.length; i++) {
//     newArr.push(arr[i])
// }
// console.log(newArr)


//with function
// function removeThree(arr) {
//     let rem = arr.slice(3)
//     return rem
// }
// console.log(removeThree(arr))

//solution 2
// const arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let newArr = []
// for (let i = 3; i < arr.length; i++) {
//     newArr.push(arr[i])
// }
// console.log(newArr)

// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array
// const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// function lastThree(arr) {
//     var last = arr.slice(0, -3)
//     return last
// }
// console.log(lastThree(arr))

//solution 2
// const arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let resArr = []
// for (let i = 0; i < (arr.length - 3); i++) {
//     resArr.push(arr[i])
// }
// console.log(resArr)

// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newArr = []
// for (let i = 3; i < arr.length; i++) {
//     newArr.push(arr[i])
// }
// console.log(newArr);

//solution 2
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function findThree(arr) {
//     let res = arr.slice(3)
//     return res
// }
// console.log(findThree(arr))

// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
// I
// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// function lastPar(arr, b) {
//     return arr.slice(-b)
// }
// console.log(lastPar(arr, 3))

//solution II
// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newArr = []

// function lastPar(arr, b) {
//     for (let i = b; i < (arr.length - b); i++) {
//         newArr.push(arr[i])
//     }
//     return newArr
// }
// console.log(lastPar(arr, 2))

// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array
// const arr = [3, 4, 9, 3, 1, 3, 11, 3, 0, 3]

// function removeB(arr, b) {

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == b) {
//             arr.splice(arr.indexOf(b), 1)
//         }
//     }
//     return arr
// }
// console.log(removeB(arr, 3))

// Write a function that takes an array (a) as argument
// Return the number of elements in a
// const arr = ['a', 'c', 'e', 'l']

// function amount(arr) {
//     return arr.length
// }
// console.log(amount(arr))

// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
// const arr = [10, 3, 0, 20, -3, -7]

// const res = arr.filter((x) => {
//     return x >= 0
// })
// console.log(res)

//second solution
// function neg(arr) {
//     var removePos = arr.filter((element) => {
//         return element < 0
//     })
//     return removePos.length
// }
// console.log(neg(arr))

// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
// const arr = [5, 8, 11, 43, 0, 10, 20, 49]
// console.log(arr.sort(desc))

// function desc(a, b) {
//     return b - a
// }

// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result
// const str = ['c', 'a', 'b', 'd']
// console.log(str.sort())

//with function
// function alp(str) {
//     return str.sort()
// }
// console.log(alp(str))

// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
// const arr = [10, 10, 10, 20, 30];
// const res = arr.reduce((acc, curr) => {
//     const answer = (acc + curr) / arr.length
//     return answer
// })
// console.log(res)


// const arr = [10, 10, 10, 20, 30];

// function tot(arr) {
//     var total = 0
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i]
//     }
//     return total
// }

// function ave(arr) {
//     return tot(arr) / arr.length
// }
// console.log(ave(arr))

// Write a function that takes an array of strings as argument
// Return the longest string
// const arr = ['amazon', 'Tesla', 'Google', 'Meta', 'Microsoft']
// var longest = arr.sort(
//     function(a, b) {
//         return b.length - a.length;
//     }
// )[0];
// console.log(longest)

// function longWord(arr) {
//     let longestWord = '';
//     for (let i = 0; i < arr.length; i++) {
//         if (longestWord.length < arr[i].length) {
//             longestWord = arr[i];
//         }
//     }
//     return longestWord;
// }
// console.log(longWord(arr))

// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
// const arr = [100, 100, 100];
// const isEqual = arr.every(x => arr === arr[0])
// console.log(isEqual)

// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// function mer(arr1, arr2) {
//     return arr1.concat(arr2)
// }
// console.log(mer(arr1, arr2))

//with function
// const concatArr = (...arr) => {
//     const res = arr.reduce((acc, curr) => {
//         return acc.concat(...curr)
//     }, [])
//     return res
// }
// console.log(concatArr([1, 4], [10, 3, 20], [true, false]))

// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array
// const arr = [
//     { a: 10, b: 7 },
//     { a: 3, b: 4 },
//     { a: 11, b: 14 },
//     { a: 100, b: 1 },
// ]

// const res = arr.sort(disc)
// console.log(res)

// function disc(x, y) {
//     return x.b - y.b
// }

// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
// const arr1 = [1, 2, 9, 10, 11];
// const arr2 = [3, 1, 11, 7, 8];
// const mergedArray = arr1.concat(arr2)
// const res = new Set(mergedArray)
// const unique = [...res]
// console.log(unique)
// const desc = unique.sort(helper)
// console.log(desc)

// function helper(a, b) {
//     return a - b
// }

// const arr1 = [1, 2, 9, 10, 11];
// const arr2 = [3, 1, 11, 7, 8];

// function descend(arr1, arr2) {
//     const mergedArray = arr1.concat(arr2);
//     const res = new Set(mergedArray);
//     const unique = [...res];
//     const desc = unique.sort(helper)
//     return desc

//     function helper(a, b) {
//         return a - b
//     }
// }

// function helper(a, b) {
//     return a - b
// }
// we can have this function in global scope and also in function scope

// console.log(descend(arr1, arr2))

// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

// const arr = [20, 4, 11, 50, 7, 9];

// function summer(arr, b) {
//     do {
//         arr.reduce((acc, curr) => {
//             acc + curr
//         })
//     }
//     while (
//         arr.forEach((a) => {
//             a > b
//         })
//     )
// }

// console.log(summer(arr, 20))

// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

// function ran(min, max) {
//     const arr = [];
//     for (let i = min; i < (max + 1); i++) {
//         arr.push(i)
//     }
//     return arr
// }

// console.log(ran(10, 20))

// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}
// const arr = ['amazon', 'Google', 'Meta', 'Tesla', 'Microsoft']
// const res = new Set(arr.filter(x => {
//     const first = x.slice(0, 1)
//     if (first == x.slice(0, 1)) {
//         return true
//     }
// }))
// console.log(res)

// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array
// const arr = [11, 3, true, 'house'];

// function front(arr, num) {
//     if (num >= 6) {
//         arr.unshift(num)
//     } else if (0 <= num < 6) {
//         arr.unshift(0)
//     }
//     return arr
// }

// console.log(arr, 8)

// numb = 3;
// const arr = [11, 3, true, 'house'];
// if (numb >= 6) {
//     arr.unshift(numb)
//     console.log(arr)
// } else if (0 < numb < 6) {
//     arr.unshift(0)
//     console.log(arr)
// }

// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array
// const arr = [10, 20, 11, 7, 17, 23, 9]

// function red(arr, num) {
//     for (let i = 0; i < arr.length; i += num) {
//         arr[i]
//     }
//     return arr
// }
// console.log(red(arr, 5))

// Run-length encoding (RLE) is a very simple form of data compression in which 
// runs of data (that is, sequences in which the same data value occurs in many 
// consecutive data elements) are stored as a single data value and count, rather 
// than as the original run. Wikipedia

// Task
// Your task is to write such a run-length encoding. For a given string, return a 
// list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such 
// that one can reconstruct the original string by replicating the character sx ix 
// times and concatening all those strings. Your run-length encoding should be minimal, ie. 
// for all i the values si and si+1 should differ.

// Examples
// As the article states, RLE is a very simple form of data compression. 
// It's only suitable for runs of data, as one can see in the following example:

// runLengthEncoding("hello world!")
//=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
// var runLengthEncoding = function(str) {
//     let arr = []
//     var count = 1
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i + 1]) {
//             count++
//         } else {
//             arr.push([count, str[i]])
//             count = 1
//         }
//     }
//     return arr
// }
// console.log(runLengthEncoding('amazon'))


// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 
// (Nothing in Haskell, None in Rust).

// function sumOfDifferences(arr) {
//     if (arr.length <= 1) 0;
//     let sumDiff = 0;
//     var descArr = arr.sort(desc);
//     for (let i = 0; i < descArr.length - 1; i++) {
//         sumDiff += descArr[i] - descArr[i + 1]
//     }

//     function desc(a, b) {
//         return b - a;
//     }
//     return sumDiff;
// }
// console.log(sumOfDifferences([2, 1, 10]))


// DESCRIPTION:
// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all 
// consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. 
// The numbers will also all be unique and in ascending order. The numbers could 
// be positive or negative and the first non-consecutive could be either too!

// function firstNonConsecutive(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] + 1 < arr[i + 1]) {
//             return arr[i + 1]
//         }
//     }
//     return null;
// }
// console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8]))


//merge and sum array elements
// function arrayPlusArray(arr1, arr2) {
//     var combinedArr = arr1.concat(arr2);
//     var sumElements = combinedArr.reduce((acc, curr) => {
//         return acc + curr;
//     })
//     return sumElements;
// }
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))

//get the average score
// function getAverage(marks) {
//     let marksAmount = 0;
//     let marksSum = 0;
//     for (let i = 0; i < marks.length; i++) {
//         marksSum += marks[i];
//         marksAmount += 1;
//     }

//     return parseInt(marksSum / marksAmount);
// }
// console.log(getAverage([1, 2, 3, 4, 5]))

function logicalCalc(array, op) {
    let res = array[0];
    for (let i = 1; i < array.length; i++) {
        if (op === 'AND') {
            res = res && array[i];
        } else if (op === 'OR') {
            res = res || array[i];
        } else if (op === 'XOR') {
            res = res != array[i];
        }
    }
    return res;
}
console.log(logicalCalc([true, true, true, false], "XOR"))