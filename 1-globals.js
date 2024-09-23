// node has no window or browser
// __dirname => path to current directory
// __filename => file name
// require => function to use modules (commonJS)
// module => info about current module (file)
// process => info about env where the program is being executed

console.log(__dirname)
setInterval(() => {
    console.log(__filename)
}, 1000)