import {Router} from 'express';

import auth from './auth';
import user from './user';
import poblacionfija from './poblacionfija';
const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/poblacionfija', poblacionfija);
export default routes;