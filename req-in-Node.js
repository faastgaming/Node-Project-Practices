const http = require('http');


const server = http.createServer((req,res) => {
    console.log(req.method, req.url);
    res.end('the end')
})

server.listen(3000 , '127.0.0.1' , () => {
    console.log('server running on localhost:3000...')
})

