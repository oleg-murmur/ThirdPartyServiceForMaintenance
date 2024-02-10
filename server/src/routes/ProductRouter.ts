import { Router } from 'express';
import { ProductController } from '../Controllers/Product.controller';

const routes = Router();
const productController = new ProductController();

routes.post('/create', productController.createProduct);
routes.get('/allProducts', productController.getAllProducts);
routes.get('/:id', productController.getProductByID);


export default routes