const mongoose=require("mongoose")
const clientSchema=new mongoose.Schema({
    fullName:{type:String,trim:true},
    nbrGifts:{type:Number},
    resetDefault:{type:Number},
   
})

module.exports=Client=mongoose.model("client",clientSchema)