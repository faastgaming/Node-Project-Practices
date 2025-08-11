const http = require('http');


const server = http.createServer((req,res) => {
    if(req.url == '/') {
        res.setHeader('Content-Type' , 'text/html')
        res.write(`
            <html>
                <head>
                    <title>Roocket Website</title>
                </head>
                <body>
                    <h1>Welcome to Roocket website</h1>
                </body>
            </html>
        `)
        return res.end();
    } else if(req.url == '/my-product') {
        let mydata = { name : 'hesam' , family : 'mousavi'}
        res.setHeader('Content-Type' , 'application/json');
        res.write(JSON.stringify(mydata))
        return res.end();
    }
})

server.listen(3000 , '127.0.0.1' , () => {
    console.log('server running on localhost:3000...')
})

