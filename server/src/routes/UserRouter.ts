// git commit -m "cheated routes-user-api and backet-api"

import { Router } from 'express';
import { UserController } from '../Controllers/User.controller';

const routes = Router();
const userController = new UserController();

routes.post('/registration', userController.Registration);
routes.post('/login', userController.Login);
routes.get('/checkAuth', userController.checkStatusAuth);


export default routes