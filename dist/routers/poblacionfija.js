"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_1 = require("./../middleware/jwt");
var AlumnosController_1 = require("./../controller/AlumnosController");
var PaaeController_1 = require("./../controller/PaaeController");
var docenteController_1 = require("./../controller/docenteController");
var express_1 = require("express");
var router = express_1.Router();
//all user
router.get('/alumnos/', [jwt_1.checkJwt], AlumnosController_1.AlumnosController.getAll);
//user by id
router.get('/alumnos/:id', AlumnosController_1.AlumnosController.getById);
//create new user 
router.post('/alumnos/', AlumnosController_1.AlumnosController.newUser);
//edit user
router.patch('/alumnos/:id', AlumnosController_1.AlumnosController.editUser);
//delete user
router.delete('/alumnos/:id', AlumnosController_1.AlumnosController.deleteUser);
router.get('/paae/', [jwt_1.checkJwt], PaaeController_1.PaaeController.getAll);
router.get('/docente/', [jwt_1.checkJwt], docenteController_1.DocenteController.getAll);
exports.default = router;
//# sourceMappingURL=poblacionfija.js.map