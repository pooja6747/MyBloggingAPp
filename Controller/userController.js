const User = require('../Model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//register
exports.register = async (req, res) => {
    try {
        const emailExist = await User.findOne({ email: req.body.email });
        if (emailExist) return res.status(400).json({ errors: true, message: 'user already exists...!!' })

        const salt = await bcrypt.genSalt();
        req.body.password = await bcrypt.hash(req.body.password, salt)

        const data = await User.create(req.body)

        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}


//login
exports.login = async (req, res) => {
    try {
        const userExist = await User.findOne({ email: req.body.email });
        if (!userExist) return res.status(400).json({ errors: true, message: "email or password is invalid.......!!!" })

        const verifyPassword = await bcrypt.compare(req.body.password, userExist.password)
        if (!verifyPassword) return res.status(400).json({ errors: true, message: "email or password is invalid.......!!!" })

        const token = await jwt.sign({id:userExist._id},process.env.SEC)

        return res.json({ errors: false, data: {token:token,user:userExist} })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}


//get user
exports.getuser = async(req,res)=>{
    try {
       const data = await User.find(); 
       return res.json({errros:false,data:data})
    } catch (error) {
        return res.status(400).json({errros:true,massage:error.message})
    }
}


//create user
// exports.postuser = async(req,res)=>{
//     try {
//        const data = await User.create(req.body); 
//        return res.json({errros:false,data:data})
//     } catch (error) {
//         return res.status(400).json({errros:true,massage:error.message})
//     }
// }