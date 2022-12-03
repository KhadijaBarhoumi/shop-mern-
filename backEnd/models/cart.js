const mongoose = require('mongoose');
const cartSchema= new mongoose.Schema({
    product:{type:mongoose.Schema.Types.ObjectId,ref:"product",required:true},
    qte:{type:Number, default: 0},
    totalPrice:{type:Number, default: 0}
   
})
module.exports=Cart=mongoose.model("cart",cartSchema)