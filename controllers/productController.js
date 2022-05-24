const productModel = require("../models/productModel")
const drinksModel = require("../models/drinksModel");

class productController{
    async addProduct(req,res){
        try{
            const product = new productModel({
                title: req.body.title,
                description: req.body.description,
                img: req.body.img
            })
            await product.save()
            res.redirect('/admin')
        } catch (e){
            console.log(e)
        }
    }
    async deleteProduct(req,res){
        try{
            const productTitle = req.body.productDel
            const drink = await drinksModel.findOneAndDelete({title:productTitle})
            res.redirect('/admin')
        } catch (e){
            console.log(e)
        }
    }
}

module.exports = new productController()