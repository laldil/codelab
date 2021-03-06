const sweetsModel = require("../models/sweetsModel")

class sweetsController{
    async addSweets(req,res){
        try{
            const product = new sweetsModel({
                title: req.body.sweetsTitle,
                price: req.body.sweetsPrice,
                img: req.body.sweetsImg
            })
            await product.save()
            res.redirect('/admin')
        } catch (e){
            console.log(e)
        }
    }
    async deleteSweets(req,res){
        try{
            const drinkTitle = req.body.sweetDel
            const drink = await sweetsModel.findOneAndDelete({title:drinkTitle})
            res.redirect('/admin')
        } catch (e){
            console.log(e)
        }
    }
}

module.exports = new sweetsController()