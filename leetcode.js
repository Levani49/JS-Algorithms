// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one 
// solution, and you may not use the same element twice.

// You can return the answer in any order.




// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
// var twoSum = function(nums, target) {
//     let ans = [];
//     const res = nums.reduce((acc, curr) => {
//         if (acc + curr === target) {
//             const ind1 = nums.indexOf(acc);
//             const ind2 = nums.indexOf(curr);
//             ans.push(ind1, ind2)
//         }
//     })
//     return ans;
// };
// console.log(twoSum([3, 2, 4], 6))

// var twoSum = function(nums, target) {
//     if (nums.length == 2) {
//         return [0, 1]
//     }
//     let arr;
//     let total = 0;
//     for (let i = 0; i < nums.length; i++) {
//         total = nums[i];

//         for (let j = 0; j < nums.length; j++) {
//             if (i == j) {
//                 continue
//             }
//             if (total + nums[j] == target) {
//                 const ind1 = nums.indexOf(total);
//                 const ind2 = nums.indexOf(nums[j])
//                 arr = [ind2, ind1]
//             }
//         }
//     }
//     return arr;
// };
// console.log(twoSum([3, 2, 3], 6))

// Given an integer x,
// return true
// if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome
// while 123 is not.


// Example 1:

//     Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

//     Input: x = -121
// Output: false
// Explanation: From left to right, it reads - 121. From right to left, it
// becomes 121 - .Therefore it is not a palindrome.
// Example 3:

//     Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left.Therefore it is not a palindrome.
// var isPalindrome = function(x) {
//     const arr = x.toString().split('');
//     if (arr[0] == '-') {
//         return false;
//     }
//     const str = arr.reverse().join('');
//     if (x == parseInt(str)) {
//         return true;
//     } else {
//         return false
//     }
// };
// console.log(isPalindrome(101))

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's 
// added together. 12 is written as XII, which is simply X + II. The number 27 is 
// written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. 
// However, the numeral for four is not IIII. Instead, the number four is written 
// as IV. Because the one is before the five we subtract it making four. 
// The same principle applies to the number nine, which is written as IX. 
// There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.



// Example 1:

// Input: num = 3
// Output: "III"
// Explanation: 3 is represented as 3 ones.
// Example 2:

// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 3:

// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


// Constraints:

// 1 <= num <= 3999
// var intToRoman = function(num) {
//     const I = 1;
//     const V = 5;
//     const X = 10;
//     const L = 50;
//     const C = 100;
//     const D = 500;
//     const M = 1000;
//     return num
// };
// console.log(intToRoman(10))


// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English lette
// var longestCommonPrefix = function(strs) {
//     let res = strs[0];

//     for (let i = 1; i < strs.length; i++) {
//         let prefix = [];
//         let j = 0;
//         while (j < res.length && j < strs[i].length) {
//             if (res[j] === strs[i][j]) {
//                 prefix.push(res[j])
//             } else {
//                 break;
//             }
//             j++;
//         }
//         res = prefix.join("");

//     }
//     return res;

// };
// console.log(longestCommonPrefix(["flower", "flow", "floight"]))


// Given an integer array nums sorted in non-decreasing order, remove 
// the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, 
// you must instead have the result be placed in the first part of the array nums. 
// More formally, if there are k elements after removing the duplicates, 
// then the first k elements of nums should hold the final result. 
// It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by 
// modifying the input array in-place with O(1) extra memory.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.



// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two 
// elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the 
// first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// var removeDuplicates = function(nums) {
//     const removeDupl = new Set(nums);
//     const newArr = [...removeDupl];
//     const minus = nums.length - newArr.length;
//     // const minusArr = Array(minus).fill('_');
//     // const latestArr = newArr.concat(minusArr);
//     // const answer = minus + ', ' + 'nums = ' + '[' + latestArr + ']';
//     // return answer;
//     const output = 'K = ' + minus + ' ' + newArr
//     return output;
// };
// console.log(removeDuplicates([1, 1, 2]))


//Find duplicated number
// function findDup(arr) {
//     arr.sort();

//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[i] == arr[i + 1]) {
//             return arr[i]
//         }
//     }
// }
// console.log(findDup([1, 2, 3, 4, 5, 1]))


// Given two strings needle and haystack, return the 
// index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This 
// is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 
// when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().



// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// var strStr = function(haystack, needle) {
//     if (needle.length === 0) {
//         return 0
//     } else if (haystack.includes(needle)) {
//         return haystack.indexOf(needle)
//     } else if (!haystack.includes(needle)) {
//         return -1
//     }
// };
// console.log(strStr("aaaa", ""))

// Given a sorted array of distinct integers and a target value, 
// return the index if the target is found. If not, return the 
// index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.



// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
// var searchInsert = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             return i;
//         }

//         if (nums[i] >= target) {
//             return i;
//         }
//     }
//     return nums.length;
// };
// console.log(searchInsert([1, 3, 5, 6], 3))

// Given a string s consisting of some words separated by some number of spaces,
// return the length of the last word in the string.

// A word is a maximal substring consisting of non - space characters only.

// Example 1:

//     Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World"
// with length 5.
// Example 2:

//     Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon"
// with length 4.
// Example 3:

//     Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy"
// with length 6.
// var lengthOfLastWord = function(s) {
//     const str = s.trim();
//     const arr = str.split(' ');
//     return arr[arr.length - 1].length;
// }
// console.log(lengthOfLastWord("luffy is still joyboy"))

// You are given a large integer represented as an integer array digits, 
// where each digits[i] is the ith digit of the integer. The 
// digits are ordered from most significant to least 
// significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.
// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].
// var plusOne = function(digits) {
//     let number = BigInt((digits.join('')))
//     number++
//     return Array.from(number.toString()).join().split(',').map(Number);
// };
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, 
// and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or 
// operator, such as pow(x, 0.5) or x ** 0.5.



// Example 1:

// Input: x = 4
// Output: 2
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal 
// part is truncated, 2 is returned.
// var mySqrt = function(x) {
//     let result;
//     let num = 0;
//     while ((num * num) <= x) {
//         result = num
//         num++
//     }
//     return result

// };
// console.log(mySqrt(8))

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?



// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
// var climbStairs = function(n) {
//     var arr = [];
//     for (let i = 0; i < n; i++) {
//         arr.push(i);
//         arr[i] = arr[i - 1] + arr[i + 2]
//     }
//     return arr
// };
// var climbStairs = function(n) {
//     if (n <= 2) {
//         return n;
//     }
//     var arr = [0, 1, 2]
//     for (let i = 3; i <= n; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2];
//     }
//     return arr[n];
// };
// console.log(climbStairs(3))

// Given the head of a sorted linked list, delete all duplicates such 
// that each element appears only once. Return the linked list sorted as well.



// Example 1:


// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:


// Input: head = [1,1,2,3,3]
// Output: [1,2,3]


// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.
// var deleteDuplicates = function(head) {
//     var unique = head.filter((value, index) => {
//         return head.indexOf(value) === index
//     })
//     return unique
// };
// console.log(deleteDuplicates([1, 1, 3, 3, 4, 2, 2]))

// second way
// var deleteDuplicates = function(head) {
//     const unique = [];
//     head.forEach((value) => {
//         if (!unique.includes(value)) {
//             unique.push(value)
//         }
//     })
//     return unique;
// };
// console.log(deleteDuplicates([1, 1, 3, 3, 4, 2, 2]))

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, 
// but instead be stored inside the array nums1. To accommodate this, nums1 
// has a length of m + n, where the first m elements denote the elements 
// that should be merged, and the last n elements are set to 0 and should be ignored. 
// nums2 has a length of n.



// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// // Explanation: The arrays we are merging are [] and [1].
// // The result of the merge is [1].
// // Note that because m = 0, there are no elements in nums1. The 0 is only there to 
// // ensure the merge result can fit in nums1.
// var merge = function(nums1, m, nums2, n) {
//     var mergedArr = nums1.concat(nums2);
//     var withoutZero = mergedArr.filter((element) => {
//         return element != 0;
//     })

//     function asc(a, b) {
//         return a - b;
//     }

//     return withoutZero.sort(asc);
// };
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))

// Given the root of a binary tree, return the inorder traversal of its nodes' values.
// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]
// var inorderTraversal = function(root) {
//     if (root.length == 0) {
//         return [];
//     } else if (root.length == 1 && root.includes(1)) {
//         return [1]
//     } else if (root.length > 1) {
//         const res = root.filter((element) => {
//             if (typeof element != 'number') {
//                 return root.splice(element, 1)
//             }
//         })
//         return root.sort()
//     }
// };
// console.log(inorderTraversal([1, 2, null, 3]))

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// const isValid = (s) => {
//     const stack = [];

//     for (let i = 0; i < s.length; i += 1) {
//         const top = stack[stack.length - 1];
//         if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
//             stack.push(s[i]);
//         } else if (s[i] === ')' && top === '(' && stack.length !== 0) {
//             stack.pop();
//         } else if (s[i] === ']' && top === '[' && stack.length !== 0) {
//             stack.pop();
//         } else if (s[i] === '}' && top === '{' && stack.length !== 0) {
//             stack.pop();
//         } else {
//             return false;
//         }
//     }

//     return stack.length === 0;
// };
// console.log(isValid('()[]{}'))

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.



// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

var mergeTwoLists = function(list1, list2) {
    var mergedList = list1.concat(list2);
    return mergedList.sort(exc)
}

console.log(mergeTwoLists([], [0]))

function exc(a, b) {
    return a - b
}