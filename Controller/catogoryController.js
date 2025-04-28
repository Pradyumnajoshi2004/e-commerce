const Catogory = require("../Model/catogory")

exports.getCatogory = async (req,res) => {
    try {
        const data = await Catogory.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
    
}

exports.postCatogory = async (req,res) => {
    try {
        const data = await Catogory.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
    
}