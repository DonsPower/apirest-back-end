import {Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {MinLength, IsNotEmpty, IsEmail} from 'class-validator';
@Entity()
@Unique(['boleta'])
export class Alumnos {
    //TODO: ADD VALIDATION
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    nombreAlumno: string;

    @Column()
    @IsNotEmpty()
    apellidoPatAlumno: string;

    @Column()
    @IsNotEmpty()
    apellidoMatAlumno: string;

    @Column()
    @IsNotEmpty()
    carrera: string;

    @Column()
    @IsNotEmpty()
    boleta: number;

    @Column()
    @IsNotEmpty()
    telefonoMovil: number;

    @Column()
    @IsNotEmpty()
    telefonoFijo: number;

    @Column()
    @IsNotEmpty()
    telefonoPersonal: number;

    @Column()
    @IsEmail()
    @IsNotEmpty()
    emailAlumno: string;

    @Column()
    @IsNotEmpty()
    NSS: string;

    @Column()
    @CreateDateColumn()
    createAt: Date;

    @Column()
    @UpdateDateColumn()
    updateAt: Date;
}