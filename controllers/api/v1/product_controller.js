const Product=require('../../../models/product');

//create the product
module.exports.create=function(req,res){
  try{
      //checking if product already exist
      Product.findOne({name:req.body.name},function(err,product){
        if(err)
        {
          res.status(500).json({err,message:"error in finding product"})
        }//if product is not added then add
        if(!product){
            Product.create(req.body,function(err,product){
              if(err)
              {
                  res.status(500).json({err,message:"error in adding product"})
              }
              
              return res.status(500).json(
                {
                  data:{
                    name:req.body.name,
                    quantity:req.body.quantity
                  }
                }
              );
            })
        }else{
            return res.status(400).json({err,message:"product already created"});
        }
      });
  }
  catch(err){
    res.status(500).json({message:err});
  }    
}

//for getting list of all products
module.exports.allProducts=function(req,res){ 
  try{
    //find all product with any condition
     Product.find({},function(err,product){
       return res.status(200).
       json(
          {
            data:{product
            }
          }
        )
      });
    }
  catch(err)
  {
    return res.status(400).json({err,message:"Error in finding product"});
  }
}

module.exports.delete=function(req,res){
  try{
    //find the product with the help of req.params.id
      Product.findById(req.params.id,function(err,product){
  
        if(err){
            res.status(500).json({err});
            }
        if(product)
        {
          
          product.remove();
          res.status(200).json({message:"Product deleted successfully"});
        }
        if(!product)
        {
          res.status(400).json({err,message:"Product with given id doesn't exist or already deleted"});
        }
      })
  }
  catch(err){
    res.status(500).json({err,message:"Unable to find in db"});
  }

}

//function for updating the quantity
module.exports.update=function(req,res){
  try{
    //find the product with the help of req.params.id
    Product.findById(req.params.id,function(err,product){
        if(err)
        {
          res.status(500).json({err});
        }
        if(product)
        {
          //changing req.query.number from string to integer with help of parseInt
          product.quantity=product.quantity+parseInt(req.query.number);
          product.save();
          res.status(200).json({
            product:product,
            message:"Product quantity updated successfully"
          })
        }
        if(!product){
          res.status(500).json({err,message:"Unable to find the product"});
        }
      })

  }catch(err){
    res.status(500).json({message:"Unable to search in db"});
  }
}



