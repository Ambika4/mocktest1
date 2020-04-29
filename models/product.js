const mongoose = require('mongoose');

//schema for the product
const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    quantity:{
       type:Number
    }
    })
//the is a collection i.e is a model
const Product=mongoose.model('Product',productSchema);
//exported the model
module.exports=Product;