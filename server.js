const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')
const app = express()
const PORT = 3000

app.set('view engine', ejs)
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', require('./routes/indexRouter'))
app.use('/home', require('./routes/homeRouter'))
app.use('/tastamats', require('./routes/tastamatsRouter'))
app.use('/admin', require('./routes/adminRouter'))
app.use('/auth', require('./routes/authRouter'))

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://aldi:7777@cluster0.hr21x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        app.listen(process.env.PORT || PORT, () =>
            console.log(`App listening at localhost: ${PORT}`)
        )
    } catch (e){
        console.log(e)
    }
}

start()