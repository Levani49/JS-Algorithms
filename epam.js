//That's Parent
class Base {
    constructor(numstr) {
        this.numstr = numstr


        this.get = function() {
            // console.log(`${this.numstr}`)
            return this.numstr
        }

        this.plus = function(...input) {
            let inputNums = input.reduce((acc, curr) => acc + curr)
            this.numstr += inputNums
                // console.log(`${this.numstr}`)
            return this
        }

        this.minus = function(...input) {
            let inputNums = input.reduce((acc, curr) => acc + curr)
            this.numstr -= inputNums
                // console.log(`${this.numstr}`)
            return this
        }

        this.multiply = function(numstr) {
            this.numstr *= numstr
                // console.log(`${this.numstr}`)
            return this
        }

        this.divide = function(numstr) {
            this.numstr /= numstr
                // console.log(`${this.numstr}`)
            return this
        }
    }
}


//First Child class named IntBuilder

class IntBuilder extends Base {
    constructor(numstr) {
        super(numstr)

        if (!this.numstr) {
            this.numstr = 0
                // console.log(`${this.numstr}`)
        } else {
            // console.log(`${this.numstr}`)
        }
    }

    static random(num1, num2) {
        console.log(`${Math.floor(Math.random() * (num2 - num1) + num1)}`)
    }

    mod(inputNums) {
        this.numstr %= inputNums
        console.log(`${this.numstr} ${this} = this`)
        return this

    }
}

//Second Child class named StringBuilder

function StringBuilder(numstr) {
    this.numstr = numstr

    if (!this.numstr) {
        this.numstr = ''
            // console.log(`${this.numstr}`)
    } else {
        // console.log(`${this.numstr}`)
    }

    this.minus = function(numstr) {
        const inputNums = [...this.numstr]
        inputNums.splice(inputNums.length - numstr)
        this.numstr = inputNums.join('')
            // console.log(`${this.numstr}`)
        return this
    }

    this.multiply = function(numstr) {
        const input = [this.numstr].toString()
        const res = input.repeat(numstr)
        this.numstr = res
            // console.log(`${this.numstr}`)
        return this
    }

    this.divide = function(numstr) {
        const input = [this.numstr].toString()
        const divider = Math.floor(input.length / numstr)
        const inputNums = input.substring(0, divider)
        this.numstr = inputNums
            // console.log(`${this.numstr}`)
        return this
    }

    this.remove = function(numstr) {
        const inputNums = [...this.numstr]
        console.log(inputNums, "input-101")
        let back = inputNums.filter((piece) => {
            return piece !== numstr
        })
        this.numstr = back.join('')
            // console.log(`${this.numstr}`)
        return this
    }

    this.sub = function(x, y) {
        const input = [this.numstr].toString()
        const res = input.substr(x, y)
        this.numstr = res
            // console.log(`${this.numstr}`)
        return this
    }
}


StringBuilder.prototype = new Base()

const stringBuilder = new StringBuilder('Hello')

stringBuilder
    .plus(" All", "!")
    .minus(2)
    .multiply(4)
    .divide(2)
    .remove("o")
    .sub(1, 1)
    .get();

console.log('');

IntBuilder.random(10, 100)

const intBuilder = new IntBuilder(10)

intBuilder
    .plus(3, 4, 4)
    .minus(3, 2)
    .multiply(3)
    .divide(2)
    .mod(3)
    .get();