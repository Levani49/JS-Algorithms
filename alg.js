//reverse string
// function rev(str) {
//     return [...str].reverse().join('')
// }
// console.log(rev('some'))


// const arr = [100, 4, 5, 77, 89, 12, 10, 19, 20, 49]
// arr.sort(rev)

// function rev(a, b) {
//     return a - b
// }
// console.log(arr)

// const arr = [5, 0, 10, -4, -15, 103, 99, -99, 1, -10]
// const positive = arr.filter((numb) => {
//     return numb >= 0;
// })
// console.log(positive)

//remove spaces
// function removeStr(str) {
//     return str.split(' ').join('')
// }
// console.log(removeStr("some tim e"))


//return a number of vowels from string

// const str = 'Hello Javascript';
// const arr = [];
// for (var i = 0; i < str.length; i++) {
//     if (str[i] == 'e' || str[i] == 'a' || str[i] == 'i') {
//         arr.push(str[i])
//     }
// }
// console.log(arr.length)

//maximum number of an array
//solution 1
// const arr = [1, 4, 5, 7, 10, 2, 11, 91, 101]
// const max = Math.max(...arr);
// console.log(max)

//solution 2
// const arr = [1, 4, 5, 7, 10, 2, 11, 91, 101, 900]
// const res = arr.reduce((acc, curr) => {
//     if ((acc - curr) > 0) {
//         return acc
//     } else if ((acc - curr) < 0) {
//         return curr
//     }
// })
// console.log(res)



// remove first three character of a string
// function rem(str) {
//     return str.slice(3)
// }
// console.log(rem('samsung'))

//get first three character of a string
// function getC(str) {
//     return str.slice(0, 3)
// }
// console.log(getC('amazon'))

//get first half of a string
// function firstHalf(str) {
//     const half = str.length / 2
//     if (str.length % 2 == 0) {
//         return str.slice(0, half)
//     }
// }
// console.log(firstHalf('amazon'))


//last three characters
// function lastC(str) {
//     return str.slice(-3)
// }
// console.log(lastC('google'))

// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// function cont(a, b) {
//     if (a.includes(b)) {
//         return b.concat(a)
//     } else {
//         return a.concat(b)
//     }
// }
// console.log(cont('epam global', 'global'))


// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting
// function splitter(num) {
//     const arr = []
//     const spl = num.toString().split('');
//     const res = spl.filter((x) => {
//         if (typeof x !== 'number') {
//             return arr.push(Number(x))
//         }
//     })
// }
// console.log(splitter(134))


// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

// function isPrime(a) {
//     if (a <= 1) {
//         false
//     } else {
//         for (let i = 2; i < a; i++) {
//             if (a % i === 0) {
//                 return false
//             }
//         }
//         return true;
//     }
// }
// console.log(isPrime(7))


// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y
//todo
// function divisible(x, y) {
//     if (x % y == 0) {
//         return x
//     } else if (x % y !== 0) {
//         // x++;
//         for (let i = 0; i < 100; i++) {
//             if (x % y == 1) {
//                 return i
//             }
//         }
//     }
//     return x;
// }
// console.log(divisible(8, 3))

// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

function ins(a, b) {
    const conc = a.split('')
    const arr = conc.splice(2, 0, b)
        /* const sl = a.concat(b) */
    return arr
}
console.log(ins('1245', '3'))