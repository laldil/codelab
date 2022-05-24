const fruitsModel = require("../models/fruitsModel");

class fruitsController{
    async addFruits(req,res){
        try{
            const product = new fruitsModel({
                title: req.body.fruitsTitle,
                price: req.body.fruitsPrice,
                img: req.body.fruitsImg
            })
            await product.save()
            res.redirect('/admin')
        } catch (e){
            console.log(e)
        }
    }
    async deleteFruits(req,res){
        try{
            const drinkTitle = req.body.fruitDel
            const drink = await fruitsModel.findOneAndDelete({title:drinkTitle})
            res.redirect('/admin')
        } catch (e){
            console.log(e)
        }
    }
}

module.exports = new fruitsController()