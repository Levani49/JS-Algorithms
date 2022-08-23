// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// function hasProperty(obj, b) {
//     if (obj.hasOwnProperty('b')) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(hasProperty(obj, 'b'))

// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
// function extractString(str) {
//     return str.slice(-3)
// }
// console.log(extractString('amazon'))

// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
// function nth(str, n) {
//     return str.substr(n, 1)
// }
// console.log(nth('Google', 4))

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
// let obj = {
//     country: 'Sweden',
//     continent: 'Europe'
// }

// function returnKey(obj) {
//     if (obj.hasOwnProperty('country')) {
//         return obj['country']
//     } else {
//         return 'there is not key named country'
//     }
// }
// console.log(returnKey(obj))

// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result
// function createSet(a, b, c) {
//     let arr = [];
//     arr.push(a, b, c)
//     const res = new Set(arr)
//     return res
// }
// console.log(createSet(1, 2, 3))

// Have the function FindIntersection(strArr) read the array of strings stored in 
// strArr which will contain 2 elements: the first element will represent a list of 
// comma-separated numbers sorted in ascending order, the second element will represent 
// a second list of comma-separated numbers (also sorted). Your goal is to return a 
// comma-separated string containing the numbers that occur in elements of strArr in 
// sorted order. If there is no intersection, return the string false.
// const strArr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]

// function FindIntersection(strArr) {
//     const firstList = strArr[0].split(", ")
//     const secondList = strArr[1].split(", ")
//     const res = firstList.filter((element) => secondList.includes(element))
//     if (res.length == 0) {
//         return false
//     } else {
//         return res
//     }
// }
// console.log(FindIntersection(strArr))

// Have the function FirstFactorial(num) take the num parameter being passed and 
// return the factorial of it. For example: if num = 4, then your program should 
// return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 
// and the input will always be an integer.
// function FirstFactorial(num) {
//     if (num === 0 || num === 1) {
//         return 1
//     }
//     for (let i = num - 1; i >= 1; i--) {
//         num *= i
//     }
//     return num
// }
// console.log(FirstFactorial(4))

// function FirstFactorial(num) {
//     if (num === 0) {
//         return 0
//     } else if (num === 1) {
//         return 1
//     } else if (num > 1) {
//         return (num * FirstFactorial(num - 1))
//     }
// }
// console.log(FirstFactorial(4))

// Have the function FirstReverse(str) take the str parameter 
// being passed and return the string in reversed order. For example: 
// if the input string is "Hello World and Coders" then your program 
// should return the string sredoC dna dlroW olleH.
// function rev(str) {
//     return [...str].reverse().join('')
// }
// console.log(rev('epam'))

//Have the function LongestWord(sen) take the sen parameter being passed
//  and return the longest word in the string. If there are two or more words 
//  that are the same length, return the first word from the string with that 
//  length. Ignore punctuation and assume sen will not be empty. Words may also 
//  contain numbers, for example "Hello world123 567"
// function longestWord(str) {
//     const arr = str.split(' ');
//     var longest = arr.sort(
//         function sorting(a, b) {
//             return b.length - a.length
//         }
//     )[0];
//     return longest;
// }
// console.log(longestWord('Hello every element'))


// Have the function QuestionsMarks(str) take the str string parameter, which 
// will contain single digit numbers, letters, and question marks, and check if 
// there are exactly 3 question marks between every pair of two numbers that add 
// up to 10. If so, then your program should return the string true, otherwise it 
// should return the string false. If there aren't any two numbers that add up to 
// 10 in the string, then your program should return false as well.

// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true 
// because there are exactly 3 question marks between 6 and 4, and 3 question marks 
// between 5 and 5 at the end of the string.
// function questionMarks(str) {
//     const arr = str.split(' ');
//     const res = arr.filter((element) => {
//         if (element === '?') {
//             const index = arr.indexOf(element)
//             if (arr[index - 1] === '?' && arr[index + 1] === '?') {
//                 if (arr.getValue(arr.index - 2) + arr.getValue(arr.index + 2) === 10) {
//                     true
//                 } else {
//                     false
//                 }
//             }
//         }
//         return true
//     })
//     return res
// }
// console.log(questionMarks("acc?7??sss?3rr1??????5"))


// Have the function CodelandUsernameValidation(str) take the str parameter 
// being passed and determine if the string is a valid username 
// according to the following rules:

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

// If the username is valid then your program should return the 
// string true, otherwise return the string false.
// function userNameValidation(str) {
//     const arr = str.split('');
//     const res = (arr.map(Number));
//     if (res[0] === NaN) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(userNameValidation('sa_12mas'))


//CODEWARS
// Write a function that takes an array of words and smashes them together
//  into a sentence and returns the sentence. You can ignore any need to sanitize
//   words or add punctuation, but you should add spaces between each word. Be careful,
//    there shouldn't be a space at the beginning or the end of the sentence!

// EXAMPLE
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
//this solution doesn't return a string
// const arr = ['hello', 'world', 'this', 'is', 'great'];

// function removeQuotes(arr) {
//     const res = arr.reduce((acc, curr) => {
//         return acc + ' ' + curr
//     })
//     return res
// }
// console.log(removeQuotes(arr))

//solution II
// const arr = ['hello', 'world', 'this', 'is', 'great'];

// function removeComma(arr) {
//     const res = arr.toString();
//     const rep = res.replaceAll(',', ' ')
//     return rep
// }
// console.log(removeComma(arr))

// Write a function that checks if a given string (case insensitive) is a palindrome.
// function isPalindrome(str) {
//     return str == str.split('').reverse().join('')
// }
// console.log(isPalindrome('anna'))

// In this simple exercise, you will create a program that will take two lists of 
// integers, a and b. Each list will consist of 3 positive integers above 0, representing 
// the dimensions of cuboids a and b. You must find the difference of the cuboids
// ' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume 
// of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.
// const a = [2, 2, 3];
// const b = [5, 4, 1];
// const arr1 = a.reduce((acc, curr) => {
//     return acc * curr
// });
// const arr2 = b.reduce((acc, curr) => {
//     return acc * curr
// });

// function findDifference(a, b) {
//     if (arr1 > arr2) {
//         return arr1 - arr2
//     } else if (arr1 < arr2) {
//         return arr2 - arr1
//     } else if (arr1 == arr2) {
//         return 0
//     }
// }
// console.log(findDifference(a, b))


// Given a string, you have to return a string in which each character 
// (case-sensitive) is repeated once.
// "String"      -> "SSttrriinngg"
// function doubleChar(str) {
//     const arr = str.split('');
//     const res = arr.map((element) => {
//         return element + '' + element
//     })
//     const last = res.toString();
//     return last.replaceAll(',', '')
// }
// console.log(doubleChar('string'))


// Your task is to make two functions (max and min, or maximum and minimum, etc., 
//     depending on the language) that receive a list of integers as input and return, 
//     respectively, the largest and lowest number in that list.
// const list = [2, 5, -8, 11, 1, -1, 10, 300, -200];

// var min = function(list) {
//     var smallest = [0];
//     for (let i = 0; i < list.length; i++) {
//         if (list[i] < smallest) {
//             smallest = list[i]
//         }
//     }
//     return smallest;
// }
// console.log(min(list))

// var max = function(list) {
//     var maximum = [0];
//     for (let i = 0; i < list.length; i++) {
//         if (list[i] > maximum) {
//             maximum = list[i]
//         }
//     }
//     return maximum;
// }
// console.log(max(list))


// Complete the function that takes two integers (a, b, where a < b) 
// and return an array of all integers between the input parameters, including them.
// function between(a, b) {
//     const arr = [];
//     for (let i = a; i < (b + 1); i++) {
//         arr.push(i)
//     }
//     return arr
// }
// console.log(between(31, 49))


// In this kata you will create a function that takes in a list and 
// returns a list with the reverse order.
// function reverseList(list) {
//     return list.reverse()
// }
// console.log(reverseList([1, 2, 3, 4, 5, 6]))

// Create a function that accepts a list/array and a number n, and returns a 
// list/array of the first n elements from the list/array.
// function take(arr, n) {
//     arr.splice(n);
//     return arr;
// }
// console.log(take([1, 2, 3, 4, 5, 6, 7, 8, 9], 4))


// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.
// function testEven(n) {
//     if (n % 2 == 0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(testEven(-4))


// You get any card as an argument. Your task is to return a suit of this card
// function defineSuit(card) {
//     if (card.includes('♣')) {
//         return 'clubs'
//     } else if (card.includes('♦')) {
//         return 'diamonds'
//     } else if (card.includes('♥')) {
//         return 'hearts'
//     } else if (card.includes('♠')) {
//         return 'spades'
//     }
// }
// console.log(defineSuit('3♠'))


// Create a function that takes 2 integers in form of a string as an input,
//  and outputs the sum (also as a string):
// function sumStr(a, b) {
//     const res1 = Math.floor(a);
//     const res2 = Math.floor(b);
//     const res = res1 + res2;
//     return res.toString()
// }
// console.log(sumStr('10', '11'))


// Remove an exclamation mark from the end of a string. For a beginner kata, 
// you can assume that the input data is always a string, no need to verify it.
// function remove(string) {
//     if (string.slice(-1) === '!') {
//         const res = string.slice(0, -1);
//         return res;
//     } else if (string.slice(-1) != '!') {
//         return string
//     }
// }
// console.log(remove('!hello'))


// Everybody has probably heard of the animal heads and legs problem from the earlier years at school. It goes:

// “A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?”

// Where x <= 1000 and y <=1000

// #Task

// Assuming there are no other types of animals, work out how many of each animal are there.

// Return a tuple in Python - (chickens, cows) and an array list - [chickens, cows]/{chickens, cows} in all other languages

// If either the heads & legs is negative, the result of your calculation is negative or the 
// calculation is a float return "No solutions" (no valid cases), or [-1, -1] in COBOL.

// In the form:
//todo...

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle 
// or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(3, 3) --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and 
// width are equal, otherwise it is a rectangle.

// const areaOrPerimeter = function(l, w) {
//     if (l != w) {
//         return (l + w) * 2
//     } else if (l == w) {
//         return l * w
//     }
// };
// console.log(areaOrPerimeter(10, 10))


// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! 
// if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with 
// a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

// function hello(name) {
//     if (!name || name.length === 0) {
//         return 'Hello, World!'
//     } else if (name != '') {
//         const first = name.slice(0, 1).toUpperCase();
//         const last = name.slice(1).toLowerCase();
//         const sign = last + '!';
//         const fin = 'Hello, ' + first + sign;
//         return fin
//     }
// }
// console.log(hello(''))

// Ahoy Matey!

// Welcome to the seven seas.

// You are the captain of a pirate ship.

// You are in battle against the royal navy.

// You have cannons at the ready.... or are they?

// Your task is to check if the gunners are loaded and ready, if they are: Fire!

// If they aren't ready: Shiver me timbers!

// Your gunners for each test case are 2, 3 or 4.

// When you check if they are ready their answers are in a dictionary and will either be: aye or nay

// Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by 
//     the captain's orders or walk the plank, dirty sea-dog!)

// If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!

// let gunners = { 'Mike': 'aye', 'Joe': 'aye', 'Johnson': 'aye', 'Peter': 'aye' }
// const cannonsReady = (gunners) => {
//     const arr = Object.values(gunners);
//     if (arr.every(el => el === 'aye')) {
//         return 'Fire!'
//     } else {
//         return 'Shiver me timbers!'
//     }
// }
// console.log(cannonsReady(gunners))


// Define String.prototype.toAlternatingCase (or a similar function/method such as 
// to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; 
// see the initial solution for details) such that each lowercase letter becomes uppercase 
// and each uppercase letter becomes lowercase.

// function chan(str) {
//     const arr = str.split('');
//     const res = arr.map((element) => {
//         if (element.toUpperCase()) {
//             return element.toLowerCase()
//         }
//     })
//     return res.toString().replaceAll(',', '')
// }
// console.log(chan('Some'))

// let str = "Some";

// const newStr = str
//     .split("")
//     .map(c => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
//     .join("");

// console.log(newStr);

// const listOfNumbers = [1, 2, 3];


// Add an item to the list:

// AddExtra method adds a new item to the list and returns the list. 
// The new item can be any object, and it does not matter. 
// (lets say you add an integer value, like 13)

// In our test case we check to assure that the returned list has one more item 
// than the input list. However the method needs some modification to pass this test.

// P.S. You have to create a new list and add a new item to that. 
// (This Kata is originally designed for C# language and it shows that adding a 
//     new item to the input list is not going to work, even though the parameter 
//     is passed by value, but the value is poining to the reference of list and any 
//     change on parameter will be seen by caller)

// const listOfNumbers = [1, 2, 3];

// function addExtra(listOfNumbers) {
//     const arr = []
//     listOfNumbers.push(4);
//     const res = new Set(listOfNumbers)
//     const setArr = [...res]
//     const last = setArr.forEach((element) => {
//         arr.push(element)
//     })
//     return arr
// }
// console.log(addExtra(listOfNumbers))


// Complete the function that takes a non-negative integer n as input, and returns a 
// list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).
// function powersOfTwo(n) {
//     const arr = [];
//     for (let i = 0; i < n + 1; i++) {
//         arr.push(2 ** i)
//     }
//     return arr
// }
// console.log(powersOfTwo(2))


// Write a function called repeatStr which repeats the 
// given string string exactly n times.
// function repeatStr(n, s) {
//     return s.repeat(n)
// }
// console.log(repeatStr(3, 'some'))

// Write a function that accepts two integers and returns the remainder 
// of dividing the larger value by the smaller value.

// Division by zero should return NaN.
// function remainder(n, m) {
//     if (n > m) {
//         return n % m
//     } else if (m > n) {
//         return m % n
//     } else if (n == 0 || m == 0) {
//         return NaN
//     } else if (n == m) {
//         return 0
//     }
// }
// console.log(remainder(17, 5))


//remove strings from an array
// const arr = [1, 2, 3, 'some', true, 10, 'any']
// const res = arr.filter((element) => {
//     if (typeof element === 'string') {
//         arr.splice(arr.indexOf(element), 1)
//         return arr
//     }
// })
// console.log(res)
// console.log(arr)

// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// sumMul(2, 9) == > 2 + 4 + 6 + 8 = 20

// function sumMul(n, m) {
//     const arr = [];
//     if (n < 0 || m < 0 || n == 0 || m == 0) {
//         return 'INVALID'
//     } else {
//         for (let i = n; i < m; i += n) {
//             arr.push(i);
//         }
//     }
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum
// }
// console.log(sumMul(2, 9))


// Complete the solution so that it reverses all of the words within the string passed in.
// function reverseWords(str) {
//     const arr2 = [];
//     const arr = str.split(' ');
//     for (let i = arr.length; i > -1; i--) {
//         arr2.push(arr[i]);
//     }
//     return arr2.toString().replaceAll(',', ' ');
// }
// console.log(reverseWords('some and any or you'))

// Create a function that checks if a number n is divisible by two numbers x AND y. 
// All inputs are positive, non-zero digits.
// function isDivisible(n, x, y) {
//     if (n % x == 0 && n % y == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isDivisible(100, 3, 25))

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' 
// and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', 
// if there are more than 2 return 'I smell a series!'. If there are no good ideas, 
// as is often the case, return 'Fail!'.
// function well(x) {
//     if (!x.includes('good')) {
//         return 'Fail!'
//     } else if (x.find((element) => element === 'good' && element == 2)) {
//         return 'Publish';
//     }
// }
// console.log(well(['normal', 'good', 'excelent', 'good']))   todo........


// Our football team finished the championship. The result of each match look like "x:y". 
// Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the 
// championship. Rules for counting points for each match:

// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4
// function points(games) {
//     let points = 0;
//     const res = games.forEach((element) => {
//         if (element[0] > element[2]) {
//             points += 3;
//         } else if (element[0] == element[2]) {
//             points += 1;
//         }
//     })
//     return points;
// }
// console.log(points(["3:1", "2:2", "0:1", '3:2', '1:1', '4:0']))

// Caution: This kata does not currently have any known supported versions for JavaScript. 
// It may not be completable due to dependencies on out-dated libraries/language versions.
// Description:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end 
// of string. For a beginner kata, you can assume that the input data is always a non 
// empty string, no need to verify it.
// function remove(string) {
//     if (string.includes('!')) {
//         const res = string.replaceAll('!', '');
//         return res + '!'
//     }
// }
// console.log(remove('!h!i!!'))

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers 
// and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
// function countPositivesSumNegatives(input) {
//     const arr = [];
//     let sumNeg = 0;
//     const len = [];
//     const res = input.forEach((element) => {
//         if (element > 0) {
//             len.push(element);
//             const ind = len.length
//             arr.splice(0, 1, ind)
//         } else if (element < 0) {
//             sumNeg += element;
//             arr.splice(1, 1, sumNeg);
//         } else if (input.length === 0) {
//             return input;
//         }
//     })
// //     return arr;
// // }
// // console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

// function countPositivesSumNegatives(input) {
//     const arr = [];
//     let count = 0;
//     let sumNeg = 0;
//     const res = input.forEach((element) => {
//         if (element > 0) {
//             count += 1
//         } else if (element < 0) {
//             sumNeg += element;
//         } else if (input.length === 0) {
//             return input;
//         }
//     })
//     const result = [count, sumNeg];
//     return result
// }
// console.log(countPositivesSumNegatives([-11, -12, -13, -14, -15])


// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// function abbrevName(name) {
//     const arr = name.split(' ');
//     const nameWord = arr[0][0].toUpperCase();
//     const lastWord = arr[1][0].toUpperCase();
//     return nameWord + '.' + lastWord;
// }
// console.log(abbrevName('elon musk'))


// Create a method each_cons that accepts a list and a number n, and 
// returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]
//todo...


// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5" (in COBOL "found the needle at position 6")
// function findNeedle(haystack) {
//     if (haystack.includes('needle')) {
//         const ind = haystack.indexOf('needle');
//         return `found the needle at position ${ind}`
//     }
// }
// console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))


// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]
// const reverseSeq = n => {
//     const arr = [];
//     for (let i = n; i > 0; i--) {
//         arr.push(i)
//     }
//     return arr
// };
// console.log(reverseSeq(5))


// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the 
// digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]
// function digitize(n) {
//     if (n == 0) {
//         return [0]
//     } else {
//         const rev = n.toString().split('').reverse().join('');
//         const spl = rev.split('');
//         for (let i = 0; i < spl.length; i++) {
//             if (typeof spl[i] === 'string') {
//                 spl[i] = Math.floor(spl[i]);
//             }
//         }
//         return spl
//     }
// }
// console.log(digitize(348597))

// Write a function get_char() / getChar() which takes a number and returns 
// the corresponding ASCII char for that value.
//todo

//Remove all exclamation marks from the end of sentence.
// function remove(string) {
//     while (string.slice(-1) === '!') {
//         string = string.slice(0, -1)
//     }
//     return string
// }
// console.log(remove('he!l!o!llo!!'))

// Create a function called shortcut to remove the lowercase 
// vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// function shortcut(string) {
//     const last = []
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     const arr = string.split('');
//     const res = arr.filter((element) => {
//         if (element.includes('a') || element.includes('e') || element.includes('i') || element.includes('o') || element.includes('u')) {
//             const ind = res.indexOf(element);
//             last.push(res.splice(ind, 1))
//         }
//     })
//     return last
// }
// console.log('HELlO everyOne')


// Given a string of digits, you should replace any digit below 
// 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string
// function fakeBin(x) {
//     const arr = [];
//     const spl = x.split('');
//     const res = spl.map((element) => {
//         parseFloat(element)
//         if (element < 5) {
//             arr.push(element.replaceAll(element, 0))
//         } else if (element > 5) {
//             arr.push(element.replaceAll(element, 1))
//         }
//     })
//     const newRes = arr.join('');
//     const newArr = newRes;
//     return newArr;
// }
// console.log(fakeBin('4538559310784356811'))

// function fakeBin(x) {
//     let str = ''
//     const arr = x.split('');
//     const res = arr.map((element) => {
//         if (parseFloat(element) < 5) {
//             str += '0';
//         } else if (parseFloat(element) > 5) {
//             str += '1';
//         } else if (0 >= element <= 1) {
//             str = x
//         }
//     })
//     return str
// }
// console.log(fakeBin('4538559310784356811'))

// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!
// const rps = (p1, p2) => {
//     let str = ''
//     if (p1 === 'scissors' && p2 === 'paper') {
//         str += 'Player 1 won!'
//     } else if (p1 === 'scissors' && p2 === 'rock') {
//         str += 'Player 2 won!'
//     } else if (p1 === 'paper' && p2 === 'paper') {
//         str += 'Draw!'
//     } else if (p1 === 'paper' && p2 === 'rock') {
//         str += 'Player 1 won!'
//     } else if (p1 === 'rock' && p2 === 'paper') {
//         str += 'Pleyer 1 won!'
//     }
//     return str
// };
// console.log(rps('rock', 'paper'))

// Deoxyribonucleic acid, DNA is the primary information storage molecule 
// in biological systems. It is composed of four nucleic acid bases Guanine 
// ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. 
// RNA differs slightly from DNA its chemical structure and contains no Thymine. 
// In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. 
// All input is guaranteed to be valid, i.e. each input string will only ever consist 
// of 'G', 'C', 'A' and/or 'T'.
// function DNAtoRNA(dna) {
//     let str = ''
//     const arr = dna.split('');
//     if (arr.includes('T')) {
//         str += arr.join('').toString().replaceAll('T', 'U')
//     } else if (!arr.includes('T')) {
//         str += dna;
//     }
//     return str
// }
// console.log(DNAtoRNA('GCATOOTOOT'))

// Create a function finalGrade, which calculates the final grade of a student depending on 
// two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); 
// projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// Examples(Inputs-->Output):

// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100

// 85, 5 --> 90

// 55, 3 --> 75

// 55, 0 --> 0
// 20, 2 --> 0
// function finalGrade(exam, projects) {
//     if ((exam > 90 && exam < 101) || projects > 10) {
//         return 100;
//     } else if ((exam > 75 && exam < 91) && projects >= 5) {
//         return 90;
//     } else if (exam > 50 && projects >= 2) {
//         return 75;
//     } else {
//         return 0;
//     }
// }
// console.log(finalGrade(51, 5))

// The purpose of this kata is to work out just how many bottles of duty free 
// whiskey you would have to buy such that the saving over the normal high 
// street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice), the duty free discount 
// (discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 
// 10%, you would save £1 per bottle. If your holiday cost £500, the answer you 
// should return would be 500.

// All inputs will be integers. Please return an integer. Round down.
// function dutyFree(normPrice, discount, hol) {
//     const savedMoney = normPrice * (discount / 100);
//     return parseInt(hol / savedMoney);
// }
// console.log(dutyFree(12, 50, 1000))

// Story:
// You are going to make toast fast, you think that you should make multiple 
// pieces of toasts and once. So, you try to make 6 pieces of toast.

// Problem:
// You forgot to count the number of toast you put into there, you 
// don't know if you put exactly six pieces of toast into the toasters.

// Define a function that counts how many more (or less) pieces of toast 
// you need in the toasters. Even though you need more or less, the number 
// will still be positive, not negative.

// Examples:
// You must return the number of toast the you need to put in (or to take out). 
// In case of 5 you can still put 1 toast in:

// six_toast(5) == 1
// And in case of 12 you need 6 toasts less (but not -6):

// six_toast(12) == 6
// function sixToast(num) {
//     if (num < 6) {
//         const extraPiece = 6 - num;
//         return extraPiece;
//     } else if (num > 6) {
//         const takeOutPiece = num - 6;
//         return takeOutPiece;
//     } else if (num == 6) {
//         return 0;
//     }
// }
// console.log(sixToast(17))

// You're writing code to control your town's traffic lights. You need a 
// function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing 
// the current state of the light and returns a string representing 
// the state the light should change to.

// For example, update_light('green') should return 'yellow'.
// function updateLight(current) {
//     if (current == 'green') {
//         return 'yellow';
//     } else if (current == 'yellow') {
//         return 'red';
//     } else if (current == 'red') {
//         return 'green';
//     }
// }
// console.log(updateLight('green'))

// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.
// function checkForFactor(base, factor) {
//     if (base % factor == 0) {
//         return true;
//     } else if (base == factor) {
//         return true;
//     } else if ((base % factor) != 0) {
//         return false
//     }
// }
// console.log(checkForFactor(2, 7))

// Given a month as an integer from 1 to 12, return to which 
// quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; 
// month 6 (June), is part of the second quarter; and month 11 (November), 
// is part of the fourth quarter.
// const quarterOf = (month) => {
//     if (month >= 1 && month <= 3) {
//         return 1;
//     } else if (month >= 4 && month <= 6) {
//         return 2;
//     } else if (month >= 7 && month <= 9) {
//         return 3;
//     } else if (month >= 10 && month <= 12) {
//         return 4;
//     }
// }
// console.log(quarterOf(10))

// Grade book
// Complete the function so that it finds the average of the three scores 
// passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check 
// for negative values or values greater than 100.
// function getGrade(s1, s2, s3) {
//     const averageScore = (s1 + s2 + s3) / 3;
//     if (averageScore >= 90 && averageScore <= 100) {
//         return 'A'
//     } else if (averageScore >= 80 && averageScore <= 90) {
//         return 'B'
//     } else if (averageScore >= 70 && averageScore <= 80) {
//         return 'C'
//     } else if (averageScore >= 60 && averageScore <= 70) {
//         return 'D'
//     } else if (averageScore >= 0 && averageScore <= 60) {
//         return 'F'
//     }
// }
// console.log(getGrade(95, 90, 93))

// The Story:
// Bob is working as a bus driver. However, he has become extremely popular 
// amongst the city's residents. With so many passengers wanting to get 
// aboard his bus, he sometimes has to face the problem of not enough 
// space left on the bus! He wants you to write a simple program 
// telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number
// of passengers he can't take.
// function enough(cap, on, wait) {
//     const emptySpace = cap - on;
//     if (emptySpace >= wait) {
//         return 0;
//     } else if (emptySpace < wait) {
//         return wait - emptySpace;
//     }
// }
// console.log(enough(100, 60, 50))

// Your classmates asked you to copy some paperwork for them. 
// You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// function paperwork(n, m) {
//     if (n < 0 || m < 0) {
//         return 0;
//     } else {
//         return n * m;
//     }
// }
// console.log(paperwork(5, -5))

// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then ((P-1)! + 1) / (P * P) should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.
// function amIWilson(p) {
//     const factorial = (n) => {
//         if (n < 0) {
//             return -1;
//         } else if (n === 0) {
//             return 1;
//         } else {
//             return n * factorial(n - 1);
//         }
//     }

//     if (((factorial(p - 1) + 1) % (p * p)) == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(amIWilson(5))

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as 
// his son (or in how many years he will be twice as old).
// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     const dadYearsTemp = dadYearsOld;
//     let years = 0;
//     let yearsAgo = 0;

//     for (let i = 0; i <= dadYearsOld; i++) {
//         if (dadYearsTemp / 2 == sonYearsOld) {
//             years = dadYearsTemp;
//             yearsAgo = dadYearsOld - years;
//             return yearsAgo;
//         } else if (sonYearsOld * 2 > dadYearsOld) {
//             years = (sonYearsOld * 2) - dadYearsOld;
//             return years;
//         }
//         dadYearsTemp = dadYearsTemp - 1;
//     }
// }
// console.log(twiceAsOld(55, 50))

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     for (let i = 0; i < dadYearsOld; i++) {

//     }
// }

// A hero is on his way to the castle to complete his mission. 
// However, he's been told that the castle is surrounded with a 
// couple of powerful dragons! each dragon takes 2 bullets to be 
// defeated, our hero has no idea how many bullets he should carry.. 
// Assuming he's gonna grab a specific given number of bullets and 
// move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)
// function hero(bullets, dragons) {
//     if (bullets >= dragons * 2) {
//         return true;
//     } else if (bullets < dragons * 2) {
//         return false;
//     }
// }
// console.log(hero(7, 4))

// Complete the square sum function so that it squares each 
// number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
// function squareSum(numbers) {
//     let squaredAndSummedNumbers = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         squaredAndSummedNumbers += numbers[i] ** 2
//     }
//     return squaredAndSummedNumbers;
// }
// console.log(squareSum([0, 3, 4, 5]))

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"
// function bmi(weight, height) {
//     const calcBmi = weight / (height ** 2);
//     if (calcBmi <= 18.5) {
//         return 'Underweight';
//     } else if (calcBmi <= 25.0) {
//         return 'Normal';
//     } else if (calcBmi <= 30.0) {
//         return 'Overweight';
//     } else if (calcBmi > 30) {
//         return 'Obese';
//     }
// }
// console.log(bmi(80, 1.80))

// Consider an array/list of sheep where some sheep may be 
// missing from their place. We need a function that counts 
// the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined
// function countSheeps(arrayOfSheep) {
//     let NumberOfSheeps = 0;
//     for (let i = 0; i < arrayOfSheep.length; i++) {
//         if (arrayOfSheep[i] === true) {
//             NumberOfSheeps += 1;
//         }
//     }
//     return NumberOfSheeps;
// }
// console.log(countSheeps([true, true, true, false,
//     true, true, true, true,
//     true, false, true, false,
//     true, false, false, true,
//     true, true, true, true,
//     false, false, true, true
// ]));

// Description
// We need a function that can transform a string into a number. 
// What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string 
// is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7
// var stringToNumber = function(str) {
//     return Math.floor(str);
// }
// console.log(stringToNumber('123'))

// Complete the method that takes a boolean value and return a "Yes" 
// string for true, or a "No" string for false.
// function boolToWord(bool) {
//     if (bool == true) {
//         return 'Yes';
//     } else if (bool == false) {
//         return 'No';
//     }
// }
// console.log(boolToWord(true))

// function getRealFloor(n) {
//     if (n == 0 || n == 1) {
//         return 0;
//     } else if (n < 0) {
//         return n;
//     } else if (n < 13 && n > 1) {
//         return n - 1;
//     } else if (n > 13) {
//         return n - 2
//     }
// }
// console.log(getRealFloor(-3));

// Subtract the sum
// NOTE! This kata can be more difficult than regular 8-kyu katas (lets say 7 or 6 kyu)

// Complete the function which get an input number n such that n >= 10 and n < 10000, then:

// Sum all the digits of n.
// Subtract the sum from n, and it is your new n.
// If the new n is in the list below return the associated fruit, otherwise return back to task 1.
// Example
// n = 325
// sum = 3+2+5 = 10
// n = 325-10 = 315 (not in the list)
// sum = 3+1+5 = 9
// n = 315-9 = 306 (not in the list)
// sum = 3+0+6 = 9
// n =306-9 = 297 (not in the list)
// .
// .
// .
// ...until you find the first n in the list below.

// There is no preloaded code to help you. This is not about coding skills; think before you code
// const fruits = ['kiwi', 'pear', 'kiwi', 'banana', 'melon', 'banana', 'melon', 'pineapple',
//     'apple', 'pineapple', 'cucumber', 'pineapple', 'cucumber', 'orange', 'grape', 'orange', 'grape',
//     'apple', 'grape', 'cherry', 'pear', 'cherry', 'pear', 'kiwi', 'banana', 'kiwi', 'apple', 'melon',
//     'banana', 'melon', 'pineapple', 'melon', 'pineapple', 'cucumber', 'orange', 'apple', 'orange',
//     'grape', 'orange', 'grape', 'cherry', 'pear', 'cherry', 'pear', 'apple', 'pear', 'kiwi', 'banana',
//     'kiwi', 'banana', 'melon', 'pineapple', 'melon', 'apple', 'cucumber', 'pineapple', 'cucumber',
//     'orange', 'cucumber', 'orange', 'grape', 'cherry', 'apple', 'cherry', 'pear', 'cherry', 'pear',
//     'kiwi', 'pear', 'kiwi', 'banana', 'apple', 'banana', 'melon', 'pineapple', 'melon', 'pineapple',
//     'cucumber', 'pineapple', 'cucumber', 'apple', 'grape', 'orange', 'grape', 'cherry', 'grape',
//     'cherry', 'pear', 'cherry', 'apple', 'kiwi', 'banana', 'kiwi', 'banana', 'melon', 'banana', 'melon',
//     'pineapple', 'apple', 'pineapple'
// ]

// function SubtractSum(n) {
//     let summedN = 0;
//     let newN = 0;
//     do {
//         const arr = n.toString().split('');
//         const res = arr.map((element) => {
//             return Math.floor(element)
//         })
//         for (let i = 0; i < res.length; i++) {
//             summedN += res[i]
//         }
//         newN = n - summedN
//     }
//     while (fruits.length <= newN)
//     return fruits[newN - 1]
// }
// console.log(SubtractSum(1397))

// Character recognition software is widely used to digitise printed texts. 
// Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), 
// are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to 
// handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.
// function correct(string) {
//     if (!string.includes(5) && !string.includes(0) && !string.includes(1)) {
//         return string;
//     };
//     let filteredStr = '';
//     const splittedStr = string.split('');
//     const res = splittedStr.filter((element) => {
//         if (element == 5) {
//             const indexOfFive = splittedStr.indexOf(element);
//             const replaced = splittedStr.splice(indexOfFive, 1, 'S');
//             filteredStr = splittedStr.join('').toString()
//         } else if (element == 0) {
//             const indexOfZero = splittedStr.indexOf(element);
//             const replaced = splittedStr.splice(indexOfZero, 1, 'O');
//             filteredStr = splittedStr.join('').toString()
//         } else if (element == 1) {
//             const indexOfOne = splittedStr.indexOf(element);
//             const replaced = splittedStr.splice(indexOfOne, 1, 'I');
//             filteredStr = splittedStr.join('').toString();
//         }
//     })
//     return filteredStr;
// }
// console.log(correct('51NGAP0RE'))

// Who remembers back to their time in the schoolyard, when girls would take a 
// flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, 
// surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a 
// flower of a given number of petals, where nb_petals > 0.
// function howMuchILoveYou(nbPetals) {
//     // const phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
//     let str = '';
//     for (let i = 0; i < nbPetals + 1; i += 7) {
//         str += 'I love you'
//     }
//     for (let i = 2; i < nbPetals + 1; i += 6) {
//         str += 'a little'
//     }

//     for (let i = 3; i < nbPetals + 1; i += 6) {
//         str += 'a lot'
//     }
//     return str;
// }
// console.log(howMuchILoveYou(7))

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"
// function peopleWithAgeDrink(old) {
//     if (old < 14) {
//         return 'drink toddy'
//     } else if (old < 18 && old > 13) {
//         return 'drink coke'
//     } else if (old < 21 && old >= 18) {
//         return 'drink beer'
//     } else if (old > 20) {
//         return 'drink whisky'
//     }
// };
// console.log(peopleWithAgeDrink(22))