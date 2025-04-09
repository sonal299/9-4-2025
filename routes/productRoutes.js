var express = require("express")
var router = express.Router();
var productModel = require('../model/products');
router.use(express.json())
router.post('/post',(req,res)=>{
    try {
        productModel(req.body).save();
        res.send("product added")
    } catch (error) {
        res.send(error)
    }
})
router.get('/get',async(req,res)=>{
    try {
       var data= await productModel.find()
       res.send(data)

    } catch (error) {
        console.log(data)
    }
})
router.get('/get/:id',async(req,res)=>{
    try {
       var data= await productModel.findById(req.params.id)
       res.send(data)

    } catch (error) {
        console.log(data)
    }
})
router.delete('/del/:id',async(req,res)=>{
    try {
        console.log(req.params.id)
        await productModel.findByIdAndDelete(req.params.id);
        res.send("Data deleted")
    } catch (error) {
        res.send(error)
        
    }
})
router.put('/put/:id',async(req,res)=>{
    try {
        await productModel.findByIdAndUpdate(req.params.id,req.body);
        res.send("edited")
    } catch (error) {
        res.send(error)
    }
})
module.exports = router