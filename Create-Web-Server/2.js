const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req , res) => {
 
    let filename = path.join(process.cwd() , req.url);

    try {
        fs.lstatSync(filename)
    } catch (err) {
        res.writeHead(404 , { 'Content-Type' : 'text/html'});
        res.write('not found');
        return res.end();
    }


    fs.readFile(filename, (err , data) => {
        res.writeHead(200 , { 'Content-Type' : 'text/html'})
        res.write(data)
        res.end();
    })
});


server.listen(3000 , () => {
    console.log('server running on port 3000')
});
