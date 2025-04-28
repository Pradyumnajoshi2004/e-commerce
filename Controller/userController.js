const User = require("../Model/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.getUser = async (req,res) => {
    try {
        const data = await User.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,messaga:error.message})
    }
}

exports.postUser = async (req,res) => {
    try {
        const userExists = await User.findOne({email : req.body.email})
        if(userExists) return res.status(500).json({errors:true,message:"user already exists"})

        req.body.password = await bcrypt.hash(req.body.password,10)
        const data = await User.create(req.body)
        return res.json({errors:false,data:data})

    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.login = async (req,res) => {
    try {
        const userExists = await User.findOne({email : req.body.email})
        if(!userExists) return res.status(500).json({errors:true,message:"email or password is invalid"})
        
        const comprePassword = await bcrypt.compare(req.body.password,userExists.password)
        if(!comprePassword) return res.status(500).json({errors:true,message:"email or password is invalid"})

        const token = await jwt.sign({_id:userExists._id,role:userExists.role},process.env.SEC)
        return res.json({errors:false,data:{token:token,user:userExists}})

    } catch (error) {
        return res.json({errors:true,message:error.message})
    }
    
}