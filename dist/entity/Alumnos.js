"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumnos = void 0;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var Alumnos = /** @class */ (function () {
    function Alumnos() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Alumnos.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], Alumnos.prototype, "nombre", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], Alumnos.prototype, "apellidop", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], Alumnos.prototype, "apellidom", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], Alumnos.prototype, "progacademico", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", Number)
    ], Alumnos.prototype, "boleta", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", Number)
    ], Alumnos.prototype, "telefonomovil", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", Number)
    ], Alumnos.prototype, "telefonofijo", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", Number)
    ], Alumnos.prototype, "telefonopersonal", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsEmail(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], Alumnos.prototype, "correo", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], Alumnos.prototype, "huella", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], Alumnos.prototype, "nss", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Alumnos.prototype, "createAt", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Alumnos.prototype, "updateAt", void 0);
    Alumnos = __decorate([
        typeorm_1.Entity(),
        typeorm_1.Unique(['boleta'])
    ], Alumnos);
    return Alumnos;
}());
exports.Alumnos = Alumnos;
//# sourceMappingURL=Alumnos.js.map