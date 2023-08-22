const names = require('./4-mod-names')
const sayHi = require('./4-mod-utils')
const data = require('./5-alt-flavour')

console.log(data)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
sayHi(data) // returns data object

/* Result of console.log data

{ items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }
Hello there susan
Hello there john
Hello there peter
Hello there [object Object]

*/