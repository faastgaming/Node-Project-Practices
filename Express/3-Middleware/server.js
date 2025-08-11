const express = require('express');
const app = express();
const path = require('path')

let myloggersystem = (req, res , next) => {
    console.log('LOG');
    next();
}

// app.use(myloggersystem)

app.get('/' , myloggersystem , (req, res) => {
    res.sendFile(path.join(__dirname , 'views/index.html'))
})

app.get('/products' , (req, res) => {
    res.sendFile(path.join(__dirname , 'views/products.html'))
})


app.listen(3000 , () => console.log('server is running ...'))

