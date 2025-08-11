const express = require('express');
const app = express();
const path = require('path')
const qs = require('querystring');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method
      delete req.body._method
      return method
    }
  }))


app.get('/' , (req, res) => {
    res.sendFile(path.join(__dirname , 'views/index.html'))
})


app.get('/articles/data' , (req, res) => {
    //db
    console.log(req.params)
    res.send('data')
})

app.get('/articles/:id' , (req, res) => {
    //db
    console.log(req.params)
    res.send('id param')
})



app.get('/contact-us' , (req ,res) => {
    res.sendFile(path.join(__dirname , 'views/contact-us.html'))
})

app.post('/contact-us' , (req , res) => {
    // res.body
    console.log(req.body)
    res.send('this is post request')
});
app.put('/contact-us' , (req , res) => {
    // res.body
    console.log(req.body)
    res.send('this is put request')
});


app.patch('/contact-us' , (req , res) => {
    // res.body
    console.log(req.body)
    res.send('this is patch request')
});

app.delete('/contact-us' , (req , res) => {
    // res.body
    console.log(req.body)
    res.send('this is delete request')
});


app.use((req , res) => {
    res.sendFile(path.join(__dirname , 'views/404.html'))
})



app.listen(3000 , () => console.log('server is running ...'))

