const mongoose = require('mongoose');
const productSchema= new mongoose.Schema({
    label:{type:String,required:true},
    priceTtc:{type:Number,required:true},
    inStock:{type:Number,required:true, default: 0},
    isGift:{type:Boolean,default:true},
    qte:{type:Number, default: 0}
   
})
module.exports=Product=mongoose.model("product",productSchema)

