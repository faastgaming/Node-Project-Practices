const express = require('express');
const router = express.Router()
const path = require('path')

router.get('/' , (req, res) => {
    let title = 'hello roocket page'
    let list = [
        'item 11',
        'item 22',
        'item 33'
    ]
    res.render('home/index' , { title , mylist : list })
})


router.get('/articles/data' , (req, res) => {
    //db
    console.log(req.params)
    res.send('data')
})

router.get('/articles/:id' , (req, res) => {
    //db
    console.log(req.params)
    res.send('id param')
})



router.route('/contact-us')
            .get((req ,res) => {
                res.sendFile(path.join(__dirname , '../views/contact-us.html'))
            })
            .post((req , res) => {
                // res.body
                console.log(req.body)
                res.send('this is post request')
            })
            .put((req , res) => {
                // res.body
                console.log(req.body)
                res.send('this is put request')
            })
            .patch((req , res) => {
                // res.body
                console.log(req.body)
                res.send('this is patch request')
            })
            .delete((req , res) => {
                // res.body
                console.log(req.body)
                res.send('this is delete request')
            })



module.exports = router;
