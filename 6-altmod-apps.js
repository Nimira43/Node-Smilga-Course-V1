const names = require('./4-mod-names')
const sayHi = require('./4-mod-utils')
const data = require('./5-alt-flavour')
require('./6-mind-grenade')

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)
// sayHi(data)


/* Running this module alone...

const names = require('./4-mod-names')
const sayHi = require('./4-mod-utils')
const data = require('./5-alt-flavour')
require('./6-mind-grenade')

...results in this...

the sum is : 15

...which is the result from the 6-mind-grenade.js function called 
addValue() which was invoked at the end of that module.


*/ 