const express = require('express')
const router = express.Router();


router.get('/' , (req, res) => {
    res.send('this is admin route')
})

router.get('/articles' , (req, res) => {
    res.send('this is articles route')
})

router.get('/' , (req, res) => {
    res.send('this is admin route')
})

module.exports = router;
