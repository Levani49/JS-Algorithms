//Prototype

const person = {
    alive: true
}

const musician = {
    plays: true
}

Object.setPrototypeOf(musician, person);

console.log(musician.plays);
console.log(musician.alive);

const guitarist = {
    strings: 6,
    __proto__: musician
}

console.log(guitarist)