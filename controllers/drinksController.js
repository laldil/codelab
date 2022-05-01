const drinksModel = require("../models/drinksModel");

class drinksController{
    async addDrinks(req,res){
        try{
            const drink = new drinksModel({
                title: req.body.drinksTitle,
                price: req.body.drinksPrice,
                img: req.body.drinksImg
            })
            await drink.save()
            res.redirect('/admin')
        } catch (e){
            console.log(e)
        }
    }
}

module.exports = new drinksController()