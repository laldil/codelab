const vegetableModel = require("../models/vegetableModel");
const drinksModel = require("../models/drinksModel");

class vegetableController{
    async addVegetable(req,res){
        try{
            const product = new vegetableModel({
                title: req.body.vegetableTitle,
                price: req.body.vegetablePrice,
                img: req.body.vegetableImg
            })
            await product.save()
            res.redirect('/admin')
        } catch (e){
            console.log(e)
        }
    }
    async deleteVegetable(req,res){
        try{
            const vegetableTitle = req.body.vegetableDel
            const drink = await drinksModel.findOneAndDelete({title:vegetableTitle})
            res.redirect('/admin')
        } catch (e){
            console.log(e)
        }
    }
}

module.exports = new vegetableController()