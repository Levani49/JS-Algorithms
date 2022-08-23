// Codeland Username Validation
// Have the function CodelandUsernameValidation(str) take the str parameter 
// being passed and determine if the string is a valid username according to the following rules:

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

// If the username is valid then your program should return the string true, 
// otherwise return the string false.
// Examples
// Input: "aa_"
// Output: false
// Input: "u__hello_world123"
// Output: true
// function CodelandUsernameValidation(str) {
//     if (str.length < 4 || str.length > 25) {
//         return false;
//     }
//     if (typeof str.charAt(0) === 'string' && str.charAt(0) != '_' && str.charAt(str.length - 1) != '_' && str.length > 4 && str.length < 25) {
//         return true;
//     } else if (parseInt(str.charAt(0)) === '_' && typeof parseInt(str.charAt(0)) === 'number') {
//         return false
//     } else {
//         return false;
//     }
// }
// console.log(CodelandUsernameValidation('aaaaaaaaaa'))

// Longest Word
// Have the function LongestWord(sen) take the sen parameter being 
// passed and return the longest word in the string. If there are 
// two or more words that are the same length, return the first word 
// from the string with that length. Ignore punctuation and assume 
// sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

// Examples
// Input: "fun&!! time"
// Output: time
// Input: "I love dogs"
// Output: love
// function LongestWord(sen) {
//     let longest = '';
//     const splitted = sen.split(' ');
//     for (let i = 0; i < splitted.length; i++) {
//         if (splitted[i].length > longest.length && !splitted[i].includes('!', '&', '/', '~', ':', '[', ']')) {
//             longest = splitted[i];
//         }
//     }
//     return longest;
// }
// console.log(LongestWord('I love you!!!'))

// First Factorial
// Have the function FirstFactorial(num) take the num parameter being passed and 
// return the factorial of it. For example: if num = 4, then your program 
// should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will 
// be between 1 and 18 and the input will always be an integer.
// Examples
// Input: 4
// Output: 24
// Input: 8
// Output: 40320
// function FirstFactorial(num) {
//     if (num === 0) {
//         return 0
//     } else if (num === 1) {
//         return 1
//     } else if (num > 1) {
//         return (num * FirstFactorial(num - 1))
//     }

// }
// console.log(FirstFactorial(10))

// First Reverse
// Have the function FirstReverse(str) take the str parameter 
// being passed and return the string in reversed order. For example: 
// if the input string is "Hello World and Coders" then your program 
// should return the string sredoC dna dlroW olleH.
// Examples
// Input: "coderbyte"
// Output: etybredoc
// Input: "I Love Code"
// Output: edoC evoL I
// function FirstReverse(str) {
//     return str.split('').reverse().join('')
// }
// console.log(FirstReverse('Epam'))