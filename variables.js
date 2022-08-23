// if (true) {
//     var varVariable = 'this is true';
// }
// console.log(varVariable);

// if (true) {
//     let letVariable = 'this is true';
// }
// console.log(letVariable)

//WHAT WILL BE OUTPUT QUESTIONS
//1
// function foo() {
//     function bar() { return 3; }
//     return bar();

//     function bar() { return 8; }
// }
// console.log(foo());

//2
// function parent() {
//     var hoisted = "I'm a variable";

//     function hoisted() { return "I'm a function"; }
//     return hoisted();
// }
// console.log(parent());

//3
// console.log(foo());

// function foo() {
//     var bar = function() {
//         return 3;
//     };
//     return bar();
//     var bar = function() { return 8; };
// }

//4
// var myVar = 'foo';
// (function() {
//     console.log('Original value was: ' + myVar);
//     var myVar = 'bar';
//     console.log('New value is: ' + myVar);
// })();