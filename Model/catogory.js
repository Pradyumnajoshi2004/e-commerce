const mongoose = require("mongoose")

const catogorySchema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },

},{
    timestamps : true
})

module.exports = mongoose.model("catogory",catogorySchema)