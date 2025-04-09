var express =require('express')
require("./db")
var userRoute = require("./routes/userRoutes")
var productRoutes = require("./routes/productRoutes")
var app = express()
app.use(express.json())
var port=1234;
app.use('/api',userRoute)
app.use('/product',productRoutes)
app.listen(port,()=>{
    console.log(`server is up and running ${port}`)
})