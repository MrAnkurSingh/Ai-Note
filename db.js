const mongoose=require('mongoose');
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("MongoDB is conneceted"))
.catch((err)=> console.log("Mongo DB not conneceted",err))