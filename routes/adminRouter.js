const express = require('express')
const router = express.Router()
const path = require('path')
const productController = require('../controllers/productController')
const vegetableController = require('../controllers/vegetableController')
const fruitsController = require('../controllers/fruitsController')
const sweetsController = require('../controllers/sweetsController')
const drinksController = require('../controllers/drinksController')
const roleMiddleware = require('../middlewares/roleMiddleware')


router
    .route('/')
    .get((req,res) => res.render(path.resolve('views/admin.ejs'),
        {title: 'Admin Panel'}))
    .post(productController.addProduct)
router.post('/addVegetable', vegetableController.addVegetable)
router.post('/addFruits', fruitsController.addFruits)
router.post('/addSweets', sweetsController.addSweets)
router.post('/addDrinks', drinksController.addDrinks)

module.exports = router