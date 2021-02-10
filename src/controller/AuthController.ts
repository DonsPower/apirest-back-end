import { getRepository, Repository } from 'typeorm';
import { Request, Response } from 'express';
import { User} from '../entity/User';
import * as jwt from 'jsonwebtoken';
import config from '../config/config';
import {validate} from 'class-validator';

class AuthController{
    static login = async (req: Request, res: Response)=>{
        const {username, password, token1} = req.body;
        if(!(username && password && token1)){
            return res.status(400).json({message: 'User name and password required!! qlo '});
        }

        //Pedimos datos a la BD
        const userRepository= getRepository(User);
        let user: User;
        try {
            user= await userRepository.findOneOrFail({where:{username}});
        } catch (error) {
            return res.status(400).json({message: 'Username or password is incorrect'});
        }
        //Borrar try catch
        try {
            user= await userRepository.findOneOrFail({where:{token1}});
        } catch (error) {
            return res.status(400).json({message: 'Token incorrect'});
        }
        //Check password
        if(!user.checkPassword(password)){
            return res.status(400).json({message: 'Username or Password are incorrect'})
        }
        
        const token = jwt.sign({userId: user.id, username: user.username}, config.jwtSecret, {expiresIn: '1h'});

        res.json({message: 'OK', token:token});
    };
    static changePassword = async (req: Request, res: Response)=>{
        const {userId} = res.locals.jwtPayload;
        const {oldPassword, newPassword} = req.body;

        if(!(oldPassword && newPassword)){
            res.status(400).json({message:'Old password and new password are required'})
        }

        const userRepository = getRepository(User);
        let user: User;
        try {
            user= await userRepository.findOneOrFail(userId);

        } catch (error) {
            res.status(400).json({ message:'Something goes wrong prrooo'})
        }
        if(!user.checkPassword(oldPassword)){
            return res.status(401).json({message: 'Check your old password'});
        }
        user.password = newPassword;
        const validationOps = {validationError: {target: false, value:false } };
        const errors = await validate(user,validationOps);
        if(errors.length>0){
            return res.status(400).json(errors);
        }
        //Hash password
        user.hashPassword();
        userRepository.save(user);
        res.json({mesage:'Password changed'});
    };
}
export default AuthController;