const express = require('express')
const router = express.Router()
const path = require('path')

router
    .route('/')
    .get((req,res) => res.render(path.resolve('views/tastamats.ejs'),
        {
            title: 'Tastamats',
            activePage: 'restaurants',
            isAuth: req.cookies.isAuth,
        }))

module.exports = router