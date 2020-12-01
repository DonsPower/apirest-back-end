import { checkJwt } from "./../middleware/jwt";
import {checkRol} from "./../middleware/rols";
import { AlumnosController } from "./../controller/AlumnosController";
import { Router } from "express";

const router = Router();
//all user
router.get('/alumnos/', AlumnosController.getAll);
//user by id
router.get('/alumnos/:id', AlumnosController.getById);
//create new user 
router.post('/alumnos/', AlumnosController.newUser);
//edit user
router.patch('/alumnos/:id', AlumnosController.editUser);
//delete user
router.delete('/alumnos/:id', AlumnosController.deleteUser);
export default router;