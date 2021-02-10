import {Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {MinLength, IsNotEmpty, IsEmail} from 'class-validator';
@Entity()
@Unique(['RFC'])
export class Paae {
    //TODO: ADD VALIDATION
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    nombrePaae: string;

    @Column()
    @IsNotEmpty()
    apellidoPatPaae: string;

    @Column()
    @IsNotEmpty()
    apellidoMatPaae: string;

    @Column()
    @IsNotEmpty()
    area: string;

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
    emailPaae: string;

    @Column()
    @CreateDateColumn()
    createAt: Date;

    @Column()
    @UpdateDateColumn()
    updateAt: Date;
}