import { checkJwt } from "./../middleware/jwt";
import {checkRol} from "./../middleware/rols";
import { AlumnosController } from "./../controller/AlumnosController";
import { PaaeController} from "./../controller/PaaeController";
import { DocenteController} from "./../controller/docenteController";
import { Router } from "express";

const router = Router();
//all user
router.get('/alumnos/', [checkJwt], AlumnosController.getAll);
//user by id
router.get('/alumnos/:id', AlumnosController.getById);
//create new user 
router.post('/alumnos/', AlumnosController.newUser);
//edit user
router.patch('/alumnos/:id', AlumnosController.editUser);
//delete user
router.delete('/alumnos/:id', AlumnosController.deleteUser);

router.get('/paae/', [checkJwt], PaaeController.getAll);

router.get('/docente/', [checkJwt], DocenteController.getAll);
export default router;