const jwt = require("jsonwebtoken")

async function user(req,res,next) {
    try {
                const token = req.header("auth-token")
                const data = await jwt.decode(token)
                console.log(data);
                req.user = data
                if(req.user.role != "user") return res.status(500).json({errors:true,message:"you are not authorized"})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
    
}

module.exports = user