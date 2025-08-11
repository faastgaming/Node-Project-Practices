const express = require('express');
const app = express();
const path = require('path')
const qs = require('querystring');
const bodyParser = require('body-parser');


let myloggersystem = (req, res , next) => {
    console.log('LOG');
    next();
}

// app.use(myloggersystem)
// app.use((req, res , next) => {
//     let body = '';
//     req.on('data' , data => {
//         body += data;
//     })

//     req.on('end' , () => {
//         req.body = qs.parse(body);
//         next();
//     })
// });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.get('/' , myloggersystem , (req, res) => {
    res.sendFile(path.join(__dirname , 'views/index.html'))
})

app.get('/contact-us' , (req ,res) => {
    res.sendFile(path.join(__dirname , 'views/contact-us.html'))
})

app.post('/contact-us' , (req , res) => {
    // res.body
    console.log(req.body)
    res.send('heh')
});


app.use((req , res) => {
    res.sendFile(path.join(__dirname , 'views/404.html'))
})



app.listen(3000 , () => console.log('server is running ...'))

