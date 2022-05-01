const {Schema, model} = require('mongoose')

const drinks = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    }
})

module.exports = model('Drinks', drinks)