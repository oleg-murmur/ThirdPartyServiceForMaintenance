import { Router } from 'express';
import DishRouter from './DishRouter'
import ProductRouter from './ProductRouter'
import TeamRouter from './TeamRouter';
import IntervalRouter from './IntervalRouter';
import BindRouter from './BindRouter';
import BacketRouter from './BacketRouter';
import UserRouter from './UserRouter';

const routes = Router();

routes.use('/dishes', DishRouter);
routes.use('/products', ProductRouter)
routes.use('/cookingteam', TeamRouter)
routes.use('/timeinterval', IntervalRouter)
routes.use('/bind', BindRouter)
routes.use('/backet', BacketRouter)
routes.use('/user', UserRouter)

export default routes