// to be kept local
const secret = 'SUPER SECRET'
// to be shared
const john = 'john'
const peter = 'peter'

// console.log(module)

module.exports = { john, peter }
/* Output of console.log

PS D:\Projects3\JAVASCRIPT\13 JOHN SMILGA PROJECTS\NODE\Tutorial-01> node 4-mod-names.js
{
  id: '.',
  path: 'D:\\Projects3\\JAVASCRIPT\\13 JOHN SMILGA PROJECTS\\NODE\\Tutorial-01',
  exports: {},  <-ME"This is where all the exported stuff goes"->
  filename: 'D:\\Projects3\\JAVASCRIPT\\13 JOHN SMILGA PROJECTS\\NODE\\Tutorial-01\\4-mod-names.js',
  loaded: false,
  children: [],
  paths: [
    'D:\\Projects3\\JAVASCRIPT\\13 JOHN SMILGA PROJECTS\\NODE\\Tutorial-01\\node_modules',   
    'D:\\Projects3\\JAVASCRIPT\\13 JOHN SMILGA PROJECTS\\NODE\\node_modules',
    'D:\\Projects3\\JAVASCRIPT\\13 JOHN SMILGA PROJECTS\\node_modules',
    'D:\\Projects3\\JAVASCRIPT\\node_modules',
    'D:\\Projects3\\node_modules',
    'D:\\node_modules'
  ]
}

*/