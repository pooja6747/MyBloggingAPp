const mongoose = require('mongoose')
const express = require('express')
const userRoute = require('./Route/userRoute')
const category = require('./Route/categoryRoute')
const blog = require('./Route/blogRoute')
const cors = require('cors')
require('dotenv/config')

//init
const app = express();

//middleware
app.use(express.json())

//cors
app.use(cors())

//default route
//why use callback here?
//=> when get function call then it hit with / then , after callback function call so callback fun use here
app.get('/',(req,res)=>{
    res.send('home')
})

//main route
app.use('/api/user',userRoute)
app.use('/api/category',category)
app.use('/api/blog',blog)

//
app.listen(process.env.PORT,()=>{
    console.log(`the port no is ${process.env.PORT}`)
})


async function DB(){
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.default.STATES.connected)
    } catch (error) {
        console.log(error.message)
    }
}

DB()