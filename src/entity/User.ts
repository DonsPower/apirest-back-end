import {Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {MinLength, IsNotEmpty, IsEmail} from 'class-validator';
import * as bcrypt from 'bcryptjs';
@Entity()
@Unique(['username'])
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @MinLength(6)
    //TODO: ADD VALIDATION
    //@IsEmail()
    @IsNotEmpty()
    username: string;

    @Column()
    @MinLength(6)
    @IsNotEmpty()
    password: string;

    @Column()
    @IsNotEmpty()
    role: string;
    //Borrar token
    @Column()
    @IsNotEmpty()
    token1: string;

    @Column()
    @CreateDateColumn()
    createAt: Date;

    @Column()
    @UpdateDateColumn()
    updateAt: Date;
    //encript password
    hashPassword(): void{
        const salt= bcrypt.genSaltSync(10);
        this.password= bcrypt.hashSync(this.password, salt);
    }
    //compare password vista -> bd
    checkPassword(password: string):boolean{
        return bcrypt.compareSync(password ,this.password)
    }
}
