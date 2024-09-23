// asynchronous(or non blocking)  FS 
// fs.readFile(path, options, callback)
// path: The path to the file you want to read (e.g., ./content/first.txt).
// options: Encoding or flag options. In this case, 'utf8' is used to specify that the file should be read as a UTF-8 encoded text file.
// callback: A function that is called when the file reading is done. The callback takes two parameters: err and result.
// use callback with asynchronous because you do not know when the code is done
const { readFile, writeFile } = require('fs')
// same as
const fs = require('fs')
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    console.log(first)
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        console.log(second)
        // flag: 'w' use to overriding the old text
        writeFile('./content/result-async.txt',
            `Here is the result :${first}, ${second}`, { flag: 'w' }, (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
            })
    })
})
console.log('starting another task')

// important note
// Since the readFile function is asynchronous, the code execution continues immediately to this line. It prints starting another task without waiting for the reading of the file to finish.