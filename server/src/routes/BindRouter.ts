import { Router } from 'express';
import { BindDataController } from '../Controllers/bindDishTeamProduct.controller';

const routes = Router();
const bindDataController = new BindDataController();

routes.post('/bind', bindDataController.bindData);
routes.get('/get', bindDataController.getBindDataByID);


export default routes