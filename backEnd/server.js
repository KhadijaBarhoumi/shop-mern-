const express=require ('express')
const cors=require('cors')
const app= express()
const product=require("./routes/routes_product")
const client=require("./routes/routes_client")
const cart=require("./routes/routes_cart")
require("dotenv").config()
app.use(express.json())
app.use(cors())
const connectDb=require("./config/concetdb")
connectDb()
//routes
app.use( "/product",product)
app.use("/client",client)
app.use("/cart",cart)

const port=process.env.PORT||5000
app.listen(5000,(err)=>{
err?console.log(err):console.log(`server is run http://localhost:${port}`)
 })