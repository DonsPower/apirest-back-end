"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
var jwt = require("jsonwebtoken");
var config_1 = require("../config/config");
var checkJwt = function (req, res, next) {
    //TODO: BORRAR
    console.log('REQ->', req.headers);
    var token = req.headers['auth'];
    var jwtPayload;
    try {
        jwtPayload = jwt.verify(token, config_1.default.jwtSecret);
        res.locals.jwtPayload = jwtPayload;
    }
    catch (error) {
        return res.status(401).send({ message: 'Not Authorized' });
    }
    var userId = jwtPayload.userId, username = jwtPayload.username;
    var newToken = jwt.sign({ userId: userId, username: username }, config_1.default.jwtSecret, { expiresIn: '1h' });
    res.setHeader('token', newToken);
    //call next
    next();
};
exports.checkJwt = checkJwt;
//# sourceMappingURL=jwt.js.map