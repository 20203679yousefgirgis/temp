// synchronous(or blocking code) FS
const { readFileSync, writeFileSync } = require('fs')
// same as        
const fs = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first, second)
// if the name of the file does not exist it will create new file
writeFileSync('./content/third.txt',
    `The result is : ${first}, ${second}`,
    { flag: 'a' }
)
// 'a' (append): Opens the file for appending.
// If the file exists, new content is added at
// the end of the file without overwriting the existing content.
// If the file doesn't exist, it creates a new file.
// ./ at the beginning of a file path refers to the current working directory