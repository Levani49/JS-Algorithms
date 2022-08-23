// Write a function that takes a Set and a value as arguments
// Check if the value is present in the Set
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const mySet = new Set(arr);

// function findSet(mySet, val) {
//     if (mySet.has(val)) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(findSet(mySet, 4))

// Write a function that takes a Set as argument
// Convert the Set to an Array
// Return the Array
// const arr = [1, 2, 3, 4, 5, 1, 3];
// const setArr = new Set(arr);

// function mySet(setArr) {
//     const conv = [...setArr]
//     return conv
// }
// console.log(mySet(setArr))

// Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tipp: try not to switch to Arrays, this would slow down your code
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const mySet1 = new Set(arr1);
// const mySet2 = new Set(arr2);

// function setUnion(mySet1, mySet2) {
//     const unionArr = [...mySet1, ...mySet2]
//     const res = new Set(unionArr)
//     return res
// }
// console.log(setUnion(mySet1, mySet2))

// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result
// function createSet(a, b, c) {
//     const arr = [];
//     arr.push(a, b, c);
//     const res = new Set(arr)
//     return res
// }
// console.log(createSet(1, 2, 3))

// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const res = new Set(arr);

// function removeItem(res, val) {
//     if (res.has(val)) {
//         res.delete(val)
//         return res
//     } else {
//         return 'element is not in Set'
//     }
// }
// console.log(removeItem(res, 3))

// Write a function that takes a Set and an array as arguments
// If not already existing, add each element in the array to the Set
// Return the modified Set
// const arr = [1, 2, 3];
// const arrSet = new Set(arr);
// const onlyArr = [4, 5, 6];

// function addItem(arrSet, onlyArr) {
//     const arrRes = new Set(onlyArr);
//     const res = [...arrSet, ...arrRes];
//     return res
// }
// console.log(addItem(arrSet, onlyArr))

// Write a function that takes two sets (a and b) as arguments
// Get the intersection of the sets
// In other words, return a set containing all elements that are both in a as well as b
// const arr1 = [1, 2, 3, 4, 5, 6, 7];
// const arr2 = [3, 4, 5, 6, 7, 8, 9];
// const res = arr1.filter((element) => arr2.includes(element))
// const setArr = new Set(res)
// console.log(setArr)