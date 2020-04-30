const express=require('express');
const router=express.Router();


//importing   the ticket controller
const productController=require('../../../controllers/api/v1/product_controller');


router.get('/:id',productController.delete);
router.post('/create',productController.create);
router.get('/',productController.allProducts);

module.exports=router;