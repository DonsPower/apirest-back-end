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
    nombre: string;

    @Column()
    @IsNotEmpty()
    apellidop: string;

    @Column()
    @IsNotEmpty()
    apellidom: string;

    @Column()
    @IsNotEmpty()
    progacademico: string;

    @Column()
    @IsNotEmpty()
    boleta: number;

    @Column()
    @IsNotEmpty()
    telefonomovil: number;

    @Column()
    @IsNotEmpty()
    telefonofijo: number;

    @Column()
    @IsNotEmpty()
    telefonopersonal: number;

    @Column()
    @IsEmail()
    @IsNotEmpty()
    correo: string;

    @Column()
    @IsNotEmpty()
    huella: string;

    @Column()
    @IsNotEmpty()
    nss: string;

    @Column()
    @CreateDateColumn()
    createAt: Date;

    @Column()
    @UpdateDateColumn()
    updateAt: Date;
}