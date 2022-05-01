const express = require('express')
const router = express.Router()
const path = require('path')

router
    .route('/')
    .get((req,res) => res.render(path.resolve('views/restaurants.ejs'),
        {title: 'Restaurants', activePage: 'restaurants'}))

module.exports = router