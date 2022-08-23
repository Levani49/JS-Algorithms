// let p = new Promise((resolve, reject) => {
//     let a = 1 + 3
//     if (a == 2) {
//         resolve('succeed')
//     } else {
//         reject('rejected')
//     }
// })

// .then((message) => {
//     console.log('operation is ' + message)
// }).catch((message) => {
//     console.log('sorry, operation is ' + message)
// })


// const recordVideoOne = new Promise((resolve, reject) => {
//     resolve('Video one recorded')
// });

// const recordVideoTwo = new Promise((resolve, reject) => {
//     resolve('Video two recorded')
// });

// const recordVideothree = new Promise((resolve, reject) => {
//     resolve('Video three recorded')
// })

// Promise.race([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideothree
// ]).then((messages) => {
//     console.log(messages)
// })



// Promise Chaining

// new Promise((resolve, reject) => {
//     //asynchronous function, for example setTimeout
//     setTimeout(() => {
//         resolve(1)
//     }, 1000)
// })

// .then((result) => {
//         console.log(result)
//         return result * 4
//     })
//     .then((result) => {
//         console.log(result)
//         return result * 4
//     })
//     .then((result) => {
//         console.log(result * 10)
//         return result * 100
//     })



// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(5), 1000)
// })

// promise
//     .then(result => result * 2)
//     .then(result => result * 2)
//     .then(result => result * 2)
//     .then(result => console.log(result)) //output >> 40


// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000)
// })

// promise.then(function(result) {
//     console.log(result) // output 1
//     return result * 2
// })

// promise.then(function(result) {
//     console.log(result) // output 1
//     return result * 2
// })

// promise.then(function(result) {
//     console.log(result) // output 1
//     return result * 2
// })


// Async/Await

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`)
        if (location === 'Google') {
            resolve('Hello from Google')
        } else {
            reject('We can talk only Google')
        }
    })
}


function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra information, ${response}`)
    })
}

async function doWork() {
    try {
        const response = await makeRequest('Google') //this await means that code should wait until this request is finished
        console.log('Response received')
        const processResponse = await processRequest(response)
        console.log(processResponse)
    } catch (err) {
        console.log(err)
    }
}
doWork();