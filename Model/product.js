const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required : true
    },
    price :{
        type:Number,
        required : true
    },
    description:{
        type:String
    },
    catogory:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "catogory"
    }
},{
    timestamps : true
})


module.exports = mongoose.model("product",productSchema)