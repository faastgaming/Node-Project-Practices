const http = require('http');


const server = http.createServer((request,response) => {
    response.write('hello world');
    response.end();
})


server.listen(3000 , '127.0.0.1' , () => {
    console.log('server running on localhost:3000...')
})
