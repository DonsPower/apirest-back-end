"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlumnosController_1 = require("./../controller/AlumnosController");
var express_1 = require("express");
var router = express_1.Router();
//all user
router.get('/alumnos/', AlumnosController_1.AlumnosController.getAll);
//user by id
router.get('/alumnos/:id', AlumnosController_1.AlumnosController.getById);
//create new user 
router.post('/alumnos/', AlumnosController_1.AlumnosController.newUser);
//edit user
router.patch('/alumnos/:id', AlumnosController_1.AlumnosController.editUser);
//delete user
router.delete('/alumnos/:id', AlumnosController_1.AlumnosController.deleteUser);
exports.default = router;
//# sourceMappingURL=poblacionfija.js.map