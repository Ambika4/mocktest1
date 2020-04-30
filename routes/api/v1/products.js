const express=require('express');
const router=express.Router();


//importing   the product controller
const productController=require('../../../controllers/api/v1/product_controller');
//routes for update_quantity
router.post('/:id/update_quantity/',productController.update);
//route for deleting  id and passing paramas
router.delete('/:id',productController.delete);
//route for creating product
router.post('/create',productController.create);
//route for get all list of products
router.get('/',productController.allProducts);
module.exports=router;