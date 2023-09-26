import express from 'express';
const router = express.Router()
import { 
    getAllProducts,
    getProductById,
    createNewProduct,
    updateProduct,
    deleteProduct
 } from '../controllers/productController.js';

router.route('/products').get(getAllProducts);
router.route('/product/:id').get(getProductById);
router.route('/new/product').post(createNewProduct);
router.route('/update').put(updateProduct);
router.route('/delete').delete(deleteProduct);

export default router;
