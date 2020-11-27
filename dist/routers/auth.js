"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_1 = require("../middleware/jwt");
var express_1 = require("express");
var AuthController_1 = require("../controller/AuthController");
var router = express_1.Router();
//Vamos a loguearnos 
router.post('/login', AuthController_1.default.login);
//Changed password
router.post('/changed-password', [jwt_1.checkJwt], AuthController_1.default.changePassword);
exports.default = router;
//# sourceMappingURL=auth.js.map