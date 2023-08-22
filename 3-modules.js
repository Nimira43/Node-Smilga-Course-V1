// Modules
// CommonJS - every file is module by default.
// Modules - encapsulated code - only share minimum

const secret = 'SUPER SECRET'
const john = 'john'
const peter = 'peter'

const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

sayHi('susan')
sayHi(john)
sayHi(peter)