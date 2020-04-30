const Product=require('../../../models/product');

module.exports.create=   function(req,res){
  Product.findOne({name:req.body.name},function(err,product){
    if(err)
    {
        console.log('error in finding product in Product collection');
        return;
    }
    if(!product){
        Product.create(req.body,function(err,product){
          if(err)
          {
              console.log('error in adding product ');
              return ;
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
        return res.status(400).json({message:"product already created"});
    }
});
     
}

module.exports.allProducts=function(req,res){
  
  try{
  
     Product.find({},function(err,product){
       return res.status(200).json(
         {
           data:product
         }
       )
     });
  }
  catch(err)
  {
    return res.status(400).json({message:"Error in finding product"});
  }
}

module.exports.delete=function(req,res){
  try{
      Product.findById(req.params.id,function(err,product){
  
        if(err){
            res.status(500).json({message:"Product with given id doesn't exist"});
            }
        if(product)
        {
          
          product.remove();
          res.status(200).json({message:"Product deleted successfully"});
        }
      })
  }
  catch(err){
    res.status(500).json({message:"Unable to find in db"});
  }

}

module.exports.update=function(req,res){
  console.log(req.params.id);
  try{
    Product.findById(req.params.id,function(err,product){
        if(err)
        {
          res.status(500).json({message:"Unable to find the product"});
        }
        if(product)
        {
          console.log(req.query);
          product.quantity=product.quantity+parseInt(req.query.number);
          product.save();
          res.status(200).json({
            product:product,
            message:"Product quantity updated successfully"
          })
        }
      })

  }catch(err){
    res.status(500).json({message:"Unable to search in db"});
  }
}



