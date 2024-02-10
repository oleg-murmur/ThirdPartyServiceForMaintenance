import { Router } from 'express';
import { DishController } from '../Controllers/Dish.controller';

const routes = Router();
const dishController = new DishController();

routes.post('/create', dishController.CreateDish);
routes.get('/allDishes', dishController.getAllDish);
routes.get('/:id', dishController.getDishByID);


export default routes