const express = require('express')
const router = express.Router()
const productModel = require('../models/productModel')
const vegetableModel = require('../models/vegetableModel')
const fruitsModel = require('../models/fruitsModel')
const sweetsModel = require('../models/sweetsModel')
const drinksModel = require('../models/drinksModel')
const path = require('path')

router
    .route('/')
    .get(async (req,res) => {
        const vegetables = await vegetableModel.find()
        const fruits = await fruitsModel.find()
        const sweets = await sweetsModel.find()
        const drinks = await drinksModel.find()
        productModel.find().exec((err, products) => {
            res.render(path.resolve('views/index.ejs'),
                {
                    title: 'Products',
                    activePage: 'index',
                    products: products,
                    vegetables: vegetables,
                    fruits: fruits,
                    sweets: sweets,
                    drinks: drinks
                })
        })
    })

module.exports = router