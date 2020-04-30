const mongoose = require('mongoose');
const autoIncrement = require('mongodb-autoincrement');
mongoose.plugin(autoIncrement.mongoosePlugin);

//schema for the product
const productSchema= new mongoose.Schema({
    _id: Number,
    _v:Number,
    name:{
        type:String,
        required:true
    },
    
    quantity:{
       type:Number
    }
    }, { _id: false }, { __v: false});
    

//the is a collection i.e is a model
const Product=mongoose.model('Product',productSchema);
//exported the model

module.exports=Product;