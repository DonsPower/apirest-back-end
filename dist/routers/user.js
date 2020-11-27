"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_1 = require("./../middleware/jwt");
var rols_1 = require("./../middleware/rols");
var UserController_1 = require("./../controller/UserController");
var express_1 = require("express");
var router = express_1.Router();
//Get user - Obtener todos los usuarios
//TODO: ADD [checkJwt]
router.get('/', [jwt_1.checkJwt], UserController_1.UserController.getAll);
//Get one user 
router.get('/:id', [jwt_1.checkJwt], UserController_1.UserController.getById);
//create new user
router.post('/', [jwt_1.checkJwt, rols_1.checkRol(['admin'])], UserController_1.UserController.newUser);
//edit user
router.patch('/:id', [jwt_1.checkJwt, rols_1.checkRol(['admin'])], UserController_1.UserController.editUser);
//delete user
router.delete('/:id', [jwt_1.checkJwt, rols_1.checkRol(['admin'])], UserController_1.UserController.deleteUser);
exports.default = router;
//# sourceMappingURL=user.js.map