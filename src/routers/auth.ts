import {checkJwt} from '../middleware/jwt';
import {Router} from 'express';
import AuthController from '../controller/AuthController';

const router= Router()
//Vamos a loguearnos 
router.post('/login', AuthController.login);
//Changed password
router.post('/changed-password', [checkJwt], AuthController.changePassword);
export default router;