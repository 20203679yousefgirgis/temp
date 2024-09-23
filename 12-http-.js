// response immediately for / and /about, 
// but will still attempt to send another res.end() 
// for the error page afterward, which would lead to a 
// server error because a response can only be ended once.
const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('History')
    }
    res.end(`
<h1>Opps!!</h1>
    <p>You have a problem</p>
    <a href="/">back home</a>
        `
    )
})
server.listen(5000)