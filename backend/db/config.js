const mongoose=require ('mongoose');
const dotenv = require("dotenv");

dotenv.config();
// mongoose.connect("mongodb://localhost:27017/E-commerce_ByAnil")
let conncetion=mongoose.connect(process.env.dbUrl)
module.exports=conncetion