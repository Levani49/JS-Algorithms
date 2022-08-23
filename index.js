//chapter 3

//ex2
// const numb = 10;
// if (numb > 0) {
//     console.log('Number is positive')
// } else {
//     console.log('Try another number')
// }

//ex3
// const numb = 30;
// if (numb % 10 == 0) {
//     console.log('რიცხვი ბოლოვდება 0-ით')
// } else {
//     console.log('რიცხვი არ ბოლოვდება 0-ით')
// }

//ex4
// const numb1 = 5;
// const numb2 = 5;
// if (numb1 > 10 && numb2 > 10) {
//     const average = (numb1 + numb2) / 2
//     console.log(average)
// } else if (numb1 <= 10 || numb2 <= 10) {
//     const mult = numb1 * numb2
//     console.log(mult)
// }


//ex5
// const numb = -10;
// if (numb > 0) {
//     console.log('Number is positive')
// } else if (numb < 0) {
//     console.log('Number is negative')
// } else {
//     console.log('Number is equal to zero')
// }


//ex6
// const numb1 = 10;
// const numb2 = 20;
// const numb3 = 30;
// if (numb1 > numb2 > numb3) {
//     console.log(numb1)
// } else if (numb2 > numb1 > numb2) {
//     console.log(numb2)
// } else {
//     console.log(numb3)
// }


//ex7
// const score = 93;
// if (score > 90 && score < 101) {
//     console.log('A')
// } else if (score > 80 && score < 91) {
//     console.log('B')
// } else if (score > 70 && score < 81) {
//     console.log('C')
// } else if (score > 60 && score < 71) {
//     console.log('D')
// } else if (score > 50 && score < 61) {
//     console.log('E')
// } else if (score > 40 && score < 51) {
//     console.log('B')
// } else if (score > -1 && score < 41) {
//     console.log('Failed')
// }


//ex8
// const x = -10;
// if (x > 0) {
//     const res1 = x / 5 + (2 + x) ** 3;
//     console.log(res1)
// } else if (x <= 0) {
//     const res2 = 5 * x + (3 + x ** 5) / 4;
//     console.log(res2)
// }


//ex9
// const x = 1;
// if (x > 0) {
//     console.log(2 * x + x ** 2)
// } else if (x < 0) {
//     console.log((3 + x) / (x + 1))
// } else if (x == 1) {
//     console.log(x * 5)
// }

//ex 10
// I
// const numb = 13413527;

// function findLast() {
//     return numb % 10;
// }

// console.log(findLast())

// II
// function findLast(numb) {
//     return numb % 10;
// }
// console.log(findLast(145))

// ex11
// const year = 2200;
// if ((year % 4 == 0) && (year % 100 == 0) && (year % 400 != 0)) {
//     console.log("წელი ნაკიანია")
// } else {
//     console.log('წელი არაა ნაკიანი')
// }