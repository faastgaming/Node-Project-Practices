const http = require('http');


const server = http.createServer((req,res) => {
    if(req.url == '/' && req.method == 'GET') {
        res.setHeader('Content-Type' , 'text/html')
        res.write(`
            <html>
                <head>
                    <title>Roocket Website</title>
                </head>
                <body>
                    <h1>Welcome to Roocket website</h1>
                    <form action="" method="POST">
                        <label for="serach">Search</label>
                        <input name="search" id="search"/>
                        <button>send Data</button>
                    </form>
                </body>
            </html>
        `)
        return res.end();
    } else if(req.url == '/' && req.method == 'POST') {
        res.write('data recive');
        res.end();
    } else if(req.url == '/my-product') {
        let mydata = { name : 'hesam' , family : 'mousavi'}
        res.setHeader('Content-Type' , 'application/json');
        res.write(JSON.stringify(mydata))
        res.writeHead()
        return res.end();
    }
})

server.listen(3000 , '127.0.0.1' , () => {
    console.log('server running on localhost:3000...')
})

