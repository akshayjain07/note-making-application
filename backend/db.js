const mongoose=require("mongoose")
const mongoURI="mongodb://localhost:27017/yaseen"
const connectToMongo= async()=>{
    mongoose.connect(mongoURI)
}
console.log("connection to mongo successfull")
module.exports=connectToMongo