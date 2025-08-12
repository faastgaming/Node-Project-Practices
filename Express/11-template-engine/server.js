const express = require('express');
const app = express();
const path = require('path')
const qs = require('querystring');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')

app.set('views' , './views')
app.set('view engine' , 'ejs')


// Imports Routes
const homeRouter = require('./routes/home');
const adminRouter = require('./routes/admin');


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

app.use(express.static('public'))
app.use('/' , homeRouter)
app.use('/admin' , adminRouter)


app.use((req , res) => {
    res.sendFile(path.join(__dirname , 'views/404.html'))
})



app.listen(3000 , () => console.log('server is running ...'))

