import {Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {MinLength, IsNotEmpty, IsEmail} from 'class-validator';
@Entity()
@Unique(['RFC'])
export class Docente {
    //TODO: ADD VALIDATION
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    nombrePerAcademico: string;

    @Column()
    @IsNotEmpty()
    apellidoPatPerAcademico: string;

    @Column()
    @IsNotEmpty()
    apellidoMatPerAcademico: string;

    @Column()
    @IsNotEmpty()
    academia: string;

    @Column()
    @IsNotEmpty()
    RFC: string;

    @Column()
    @IsNotEmpty()
    telefono: string;

    @Column()
    @IsNotEmpty()
    extension: number;

    @Column()
    @IsEmail()
    @IsNotEmpty()
    emailPerAcademico: string;

    @Column()
    @CreateDateColumn()
    createAt: Date;

    @Column()
    @UpdateDateColumn()
    updateAt: Date;
}