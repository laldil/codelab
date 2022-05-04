const Router = require('express')
const router = new Router()
const controller = require('../controllers/authController')
const {check} = require("express-validator")
const authMiddleware = require('../middlewares/authMiddleware')
const roleMiddleware = require('../middlewares/roleMiddleware')
const path = require('path')

router.post('/registration', controller.registration)
router.post('/login', controller.login)
// router.get('/users', roleMiddleware(['ADMIN']))

router
    .route('/')
    .get((req,res) => res.render(path.resolve('views/sign.ejs'),
        {title: 'Home', activePage: 'home'}))



module.exports = router