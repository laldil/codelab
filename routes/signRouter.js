const express = require('express')
const router = express.Router()
const path = require('path')

router
    .route('/')
    .get((req,res) => res.render(path.resolve('views/sign.ejs'),
        {title: 'Sign'}))

module.exports = router