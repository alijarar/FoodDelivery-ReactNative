const  express = require("express")
const moongoose = require("mongoose")
const dotenv = require('dotenv')
dotenv.config()


const app= express();


moongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
    console.warn("Db Connection Done")
})

app.use(express.json())

const restaurantsRouter =  require('./Routers/restaurants');
const categoryRouter =  require('./Routers/catergory');
const imageRouter =  require('./Routers/image');


app.use('/restaurants',restaurantsRouter)
app.use('/category',categoryRouter)
app.use('/imageUpload',imageRouter)





app.listen(9000,()=>{
    console.warn("listen to the port ")
})