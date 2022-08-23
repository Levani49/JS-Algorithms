//Chapter 4
//ex1
// for (let i = 20; i < 130; i += 5) {
//     i % 5 == 0;
//     console.log(i)
// }

//ex2
// for (let i = 200; i > 24; i -= 1) {
//     if (i % 8 == 0) {
//         console.log(i)
//     }
// }

//ex3
// for (let i = 1500; i < 2101; i += 1) {
//     if (i % 7 == 0 && i % 5 == 0) {
//         console.log(i)
//     }
// }

//ex4 todo
// let sum = 0;
// for (let i = 1500; i < 2101; i += 1) {
//     if (i % 7 == 0 && i % 5 == 0) {
//         sum = i;
//         console.log(sum += i)
//     }
// }

//ex9
// for (let i = 15; i < 151; i += 5) {
//     if ((i == 50) || (i == 75) || (i == 80)) {
//         continue
//     }
//     console.log(i)
// }

//ex10
// factorial with function
// function factorial(number) {
//     if (number == 1) {
//         return 1
//     } else if (number == 0) {
//         return 0
//     } else if (number > 1) {
//         return (number * factorial(number - 1))
//     }
// }
// console.log(factorial(4))

// factorial with for loop
// function factorial(number) {
//     if (number === 0 || number === 1) {
//         return 1
//     }
//     for (var i = number - 1; i >= 1; i--) {
//         number *= i
//     }
//     return number
// }

// console.log(factorial(5))

//ex11
// const number = 30;
// for (let i = 0; i < 31; i++) {
//     if (number % i == 0) {
//         console.log(i)
//     }
// }

//ex12
// const num1 = 15;
// const numb2 = 18;
// for (let i = 0; i < 19; i++) {
//     if (num1 % i == 0 && numb2 % i == 0) {
//         console.log(i)
//     }
// }

//ex16
// function isPrime(num) {
//     if (num <= 1) {
//         false
//     } else {
//         for (let i = 2; i < num; i++) {
//             if (num % i === 0) {
//                 return false
//             }
//         }
//         return true;
//     }
// }
// console.log(isPrime(7))

//ex17
// function isPrime(num) {
//     for (let i = 2; i < 1001; i++) {
//         if (num % i === 0) {
//             return false;
//         } else {
//             return i;
//         }
//     }
//     return true;
// }
// console.log(isPrime())

//fibonacci