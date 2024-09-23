const path = require('path')
// console.log(path.sep)
const filepath = path.join('content', 'subfolder', 'text.txt')
console.log(filepath)
// to get the last name of the path 
const base = path.basename(filepath)
console.log(base)
// to get the absolute path to the app
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)


