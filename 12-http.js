const http = require('http')
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Wecome to our home page')
    }
    if(req.url === '/'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seen to find the page you are looking for</p>
    <a href="/"back home</a>
    
    `)
})

server.listen(5000)
console.log('server listenig on 5000')