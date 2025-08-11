const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req , res) => {
 
    let filename = path.join(process.cwd() , `web\\${req.url}`);
    let stat;
    
    try {
        stat = fs.lstatSync(filename)
    } catch (err) {
        res.writeHead(404 , { 'Content-Type' : 'text/html'});
        res.write('not found')
        return res.end();
    }

    if(stat.isFile()) {
        fs.readFile(filename, (err , data) => {
            res.writeHead(200 , { 'Content-Type' : 'text/html'})
            res.write(data)
            res.end();
        });
        return;
    } else if(stat.isDirectory()) {
        let requrl = req.url;
        if(requrl.substr(-1) != '/' && requrl.length > 1)
            requrl += '/';


        res.writeHead(302 ,{ 'Location' : requrl + 'index.html'})
        res.end();
    } else {
        res.writeHead(500 , { 'Content-Type' : 'text/html'})
        res.write('internal error')
        res.end();
    }


});


server.listen(3000 , () => {
    console.log('server running on port 3000')
});
