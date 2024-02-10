import { Router } from 'express';
import { BacketController } from '../Controllers/Backet.controller';

const routes = Router();
const backetController = new BacketController();

routes.get('/getBacketId', backetController.getDishesFromBacketID);
routes.post('/addDish', backetController.addDishInBacket);
routes.post('/deleteDish', backetController.deleteDishInBacket);


export default routes