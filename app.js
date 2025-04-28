const productRoute = require("./Routes/productRoute")
const userRoute = require("./Routes/userRoutes")
const catogoryRoute = require("./Routes/catogoryRoute")
const express = require("express")
const mongoose = require("mongoose")
require("dotenv/config")

const app = express()

// middleware
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("home")
})

app.use("/api/product",productRoute)
app.use("/api/user",userRoute)
app.use("/api/catogory",catogoryRoute)

app.listen(process.env.PORT || 5000)

async function db() {
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.STATES.connected);
    } catch (error) {
        console.log(error.message);
        
    }
}

db()

