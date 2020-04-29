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



