// const obj = {
//     name: "Elon",
//     lastName: 'Musk',
//     age: 57,
//     rich: true
// }

// const addProperty = {...obj, company: "spaceX" }
// console.log(addProperty)


// const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };

// // bad
// // const arr = Array.prototype.slice.call(arrLike);

// // good
// const arr = Array.from(arrLike);
// console.log(arr)