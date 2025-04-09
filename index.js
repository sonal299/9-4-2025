var express =require('express')
var userRoute = require("./routes/userRoutes")
var productRoutes = require("./routes/productRoutes")
var dotenv = require("dotenv")
var app = express()
dotenv.config();
require("./db")
var port=process.env.port;
app.use(express.json())
app.use('/api',userRoute)
app.use('/product',productRoutes)
app.listen(port,()=>{
    console.log(`server is up and running ${port}`)
})