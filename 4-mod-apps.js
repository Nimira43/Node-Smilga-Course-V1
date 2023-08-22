const names = require('./4-mod-names')
const sayHi = require('./4-mod-utils')

console.log(names)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

//-----------------------------------------------------

/* Result from console.log(names)
console.log(names)
{ john: 'john', peter: 'peter' }

*/
