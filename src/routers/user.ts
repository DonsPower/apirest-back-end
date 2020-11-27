import { checkJwt } from "./../middleware/jwt";
import {checkRol} from "./../middleware/rols";
import { UserController } from "./../controller/UserController";
import { Router } from "express";



const router = Router();

//Get user - Obtener todos los usuarios
//TODO: ADD [checkJwt]
router.get('/', [checkJwt],UserController.getAll);

//Get one user 
router.get('/:id',[checkJwt], UserController.getById);

//create new user
router.post('/',[checkJwt, checkRol(['admin'])], UserController.newUser);

//edit user
router.patch('/:id',[checkJwt, checkRol(['admin'])], UserController.editUser);

//delete user
router.delete('/:id',[checkJwt, checkRol(['admin'])], UserController.deleteUser);

export default router;