const express = require('express')
const router = express.Router()
const path = require('path')

router
    .route('/')
    .get((req,res) => res.render(path.resolve('views/home.ejs'),
        {title: 'Home', activePage: 'home'}))

module.exports = router