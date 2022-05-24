const Router = require('express')
const router = new Router()
const controller = require('../controllers/authController')
const path = require('path')

router.post('/registration', controller.registration)
router.post('/login', controller.login)
router.get('/logout', controller.logout)

router
    .route('/')
    .get((req,res) => res.render(path.resolve('views/sign.ejs'),
        {
            title: 'Home',
            activePage: 'auth',
            isAuth: req.cookies.isAuth,
        }))
module.exports = router