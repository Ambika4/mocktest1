const express=require('express');
const router=express.Router();


//importing   the ticket controller
const productController=require('../../../controllers/api/v1/product_controller');

router.post('/create',productController.create);

module.exports=router;