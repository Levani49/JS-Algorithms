// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object
// function addKey(str) {
//     Object.create(tech = { key: str })
//     return tech
// }
// console.log(addKey('amazon'))

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

// let obj = {
//     country: 'Denmark',
//     continent: 'Europe'
// }

// function place(obj) {
//     return obj.country
// }
// console.log(place(obj))

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tipp: you might want to use the square brackets property accessor
// let obj = {
//     'prop-2': 10,
//     prop: 11
// }

// function same(obj) {
//     return obj['prop-2']
// }
// console.log(same(obj))

// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

// let obj = {
//     country: 'Egypt',
//     continent: 'Africa'
// }

// function guessCountry(obj, key) {
//     const res = Object.keys(obj);
//     if (key == res[0]) {
//         return obj.country
//     } else if (key == res[1]) {
//         return obj.continent
//     }
// }

// console.log(guessCountry(obj, 'country'))

// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

// let obj = {
//     a: 1,
//     b: 2,
//     c: true,
//     d: 'string'
// }

// function contains(obj, str) {
//     const keys = Object.keys(obj)
//     if (keys.includes(str)) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(contains(obj, 'a'))

// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object
// function addValue(str) {
//     Object.create(obj = { key: str })
//     return obj
// }
// console.log(addValue('open'))

// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object
// function keyValue(a, b) {
//     Object.create(obj = { a: b })
//     return obj
// }
// console.log(keyValue('I am a key', 'I am a value'))

// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object
// const arr1 = ['a', 'b', 'c'];
// const arr2 = [1, 2, 3];

// function linker(arr1, arr2) {

// console.log(linker(arr1, arr2))

// Write a function that takes an object (a) as argument
// Return an array with all object keys
// let car = {
//     name: 'Alfa Romeo',
//     color: 'White',
//     maxSpeed: 300,
//     withTurbo: true
// }

// function onlyKeys(car) {
//     const keys = Object.keys(car);
//     return keys
// }
// console.log(onlyKeys(car))

// Write a function that takes an object (a) as argument
// Return the sum of all object values
// let points = {
//     team1: 10,
//     team2: 20,
//     team3: 11,
//     team4: 14
// }

// const arr = Object.values(points);
// const res = arr.reduce((x, y) => {
//     return x + y
// })
// console.log(res)

// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

// let obj = {
//     e: 6,
//     f: 4,
//     b: 5,
//     a: 3
// }

// with in operator
// function deleteValue(obj) {
//     if ('b' in obj) {
//         delete obj.b
//     }
//     return obj
// }

// with hasOwnProperty
// function deleteValue(obj) {
//     if (obj.hasOwnProperty('b')) {
//         delete obj.b
//     }
//     return obj
// }

// console.log(deleteValue(obj))

// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// It should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

// let obj1 = {
//     a: 1,
//     b: 2
// }

// let obj2 = {
//     c: 3,
//     b: 4,
//     e: 5
// }

// function mergeObjects(obj1, obj2) {
//     if (obj2.hasOwnProperty('b')) {
//         obj2['d'] = obj2['b']
//         delete obj2['b']
//     }
//     // return {...obj1, ...obj2 }  // we can merge two object in a different ways, first is rest parameters
//     return Object.assign(obj1, obj2) // and second one is Object.assign()
// }
// console.log(mergeObjects(obj1, obj2))

// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object
let nums = {
  j: 9,
  i: 2,
  x: 3,
  z: 4,
};

// function mul(nums, b) {
//     // const res = Object.values(nums).map((x) => {
//     //     x * b
//     // })
//     for (const element in nums) {
//         nums[element] * b
//     }
// }
// console.log(mul(nums, 10))

// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

// let obj = {
//     z: 'a',
//     y: 'b',
//     x: 'c',
//     w: 'd'
// }

// function swapKeysAndValues(obj) {
//     const swapped = Object.entries(obj).map(([key, value]) => [value, key]);
//     return Object.fromEntries(swapped);
// }

// console.log(swapKeysAndValues(obj));

// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

// let obj = {
//     a: '',
//     b: 'b',
//     c: ' ',
//     d: 'd'
// }

// const swapValue = (obj) => {
//     Object.keys(obj).forEach(key => {
//         if (obj[key] === '' || obj[key] === ' ') {
//             obj[key] = null;
//         }
//     });
// };
// swapValue(obj);
// console.log(obj);

//second way
// const res = Object.keys(obj).reduce((acc, key) => {
//     acc[key] = obj[key] === '' ? null :
//         obj[key];
//     return acc;
// }, {})
// console.log(res)

// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

// failed

// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array
// let objArr = [{
//         city: 'Tokyo',
//         country: 'Japan'
//     },
//     {
//         city: 'Bangkok',
//         country: 'Thailand'
//     }
// ]

// function addContinent(objArr, str) {
//     Object.assign(objArr[0], { continent: str })
//     Object.assign(objArr[1], { continent: str })
//     return objArr
// }
// console.log(addContinent(objArr, 'Asia'))

// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

// var friends = [{
//     username: 'David',
//     status: 'online',
//     lastActivity: 10
// }, {
//     username: 'Lucy',
//     status: 'offline',
//     lastActivity: 22
// }, {
//     username: 'Bob',
//     status: 'online',
//     lastActivity: 104
// }]

// const whosOnline = (friends) => {
//     let status = {}
//     let online = []
//     let offline = []
//     let away = []
//     for (let i = 0; i < friends.length; i++) {
//         if (friends[i].status == "online" && friends[i].lastActivity <= 10) {
//             online.push(friends[i].username)
//             status.online = online
//         } else if (friends[i].status == "offline") {
//             offline.push(friends[i].username)
//             status.offline = offline
//         } else {
//             away.push(friends[i].username)
//             status.away = away
//         }
//     }
//     return status
// }
// console.log(whosOnline(friends))

// const person = {
//     firstName: 'Elvis',
//     lastName: 'Presley',
// };

// const prototype = {
//     firstName: 'Daniel',
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// };

// Object.setPrototypeOf(person, prototype);

// delete person.getFullName
// console.log(person.getFullName())

// console.log(person.firstName)
// delete person.firstName
// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }

// function Food(name, price) {
//     Product.call(this, name, price);
//     this.category = 'food';
// }
// console.log(new Food('cheese', 5).name)

//PRACTICE
// class House {
//     constructor(color) {
//         this.color = color
//     }

//     getFurniture() {
//         return 'here is sofa'
//     }
// }

// const houseObject1 = new House('red');
// const houseObject2 = new House('blue');

// console.log(houseObject1.color)
// console.log(houseObject1.getFurniture())

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     getArea() {
//         return this.width * this.height;
//     }

//     getPerimeter() {
//         return (this.width + this.height) * 2;
//     }
// }

// const rect1 = new Rectangle(10, 20);
// console.log(rect1.getPerimeter());

// const user = {
//     name: 'william',
//     lastName: 'Shakespear',
//     'love read': true,
// }

// user.age = 20;

// console.log(user['love read']);

// let laptop = 'Mac';
// let laptopBag = {
//     ['Apple' + laptop]: true
// }
// console.log(laptopBag.AppleMac)

// let fruit = 'apple';
// let bag = {
//     [fruit + 'Computers']: 5 // bag.appleComputers = 5
// };
// console.log(bag.appleComputers)

// function House(wall, table) {
//     this.wall = wall,
//         this.table = table
// }

// const obj1 = new House('white', 10);
// console.log(obj1.wall)
// console.log('wallaas' in obj1) // if specific property/key is in objet

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// };

// for (let key in user) {
//     console.log(key);
//     // values for the keys
//     console.log(user[key]);
// }

//sum salaries
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = 0;
// for (key in salaries) {
//     sum += salaries[key]
// }
// console.log(sum)

//multiply all values by 2
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// for (key in menu) {
//     if (typeof menu[key] == 'number') {
//         menu[key] *= 2
//     }
// }
// console.log(menu)

// let tesla = {
//     owner: 'elon musk',
//     dailyIncome: 7350763,
//     topAutoCompany: true,
//     displayData: function() {
//         return `owner of tesla is ${this.owner} and daily income approximately is $${this.dailyIncome}`
//     }
// }
// const ceo = 'owner';
// console.log(tesla[ceo]) // that is same as       also here
// console.log(tesla['owner']) // this  output => elon musk
// console.log(tesla.displayData());

// const blogs = [
//     { title: 'why mac & cheese rules', likes: 30 },
//     { title: '10 thing to make with marmite', likes: 50 }
// ]
// console.log(blogs)

// let user = {
//     name: 'crystal',
//     age: 30,
//     mail: 'crystal@gmail.com',
//     location: 'berlin',
//     blogs: [
//         { title: 'why mac & cheese rules', likes: 30 },
//         { title: '10 thing to make with marmite', likes: 50 }
//     ],
//     login() {
//         console.log('user logged in')
//     },
//     logout() {
//         console.log('user logged out')
//     },
//     logblogs() {
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes)
//         })
//     }
// }
// user.logblogs();

const user = { name: "Levani" };
function sayHello(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHello.call(user, 20));
console.log(sayHello.bind(user, 19)());
