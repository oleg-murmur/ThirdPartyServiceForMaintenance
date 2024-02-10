import { Router } from 'express';
import { TimeIntervalController } from '../Controllers/TimeInterval.controller';

const routes = Router();
const timeIntervalController = new TimeIntervalController();

routes.post('/create', timeIntervalController.createInterval);
routes.get('/dishint', timeIntervalController.getIntervalsByIdDish);
routes.get('/:id', timeIntervalController.getInterval);


export default routes