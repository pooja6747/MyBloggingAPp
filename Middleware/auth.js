const jwt = require('jsonwebtoken')

//middlware three para - req,res,next
async function auth(req,res,next){
    try {
        const token = req.header('auth-token');
        if(!token) return res.status(400).json({errors:true,message:"token not found.....!!"})

        const verifyToken = await jwt.verify(token,process.env.SEC);
        if(!verifyToken) return res.status(400).json({errors:true,message:"Token is invalid"})


        next()
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}


module.exports = auth