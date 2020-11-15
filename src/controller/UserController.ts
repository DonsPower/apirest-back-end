import {getRepository} from "typeorm";
import { Request, Response} from "express";
import {User} from "../entity/User";
import {validate} from 'class-validator';
export class UserController {
    static getAll = async (req:Request, res:Response)=>{
        const userRepository = getRepository(User);
        let users;
        try {
            users= await userRepository.find();   
        } catch (error) {
            res.status(404).json({message: 'Somenthing goes wrong'})
        }
            if(users.length > 0){
                res.send(users);
            }else{
                res.status(404).json({message:'Not Result'})
            }    
    };
    static getById = async (req: Request, res: Response)=>{
        const {id} =  req.params;
        const userRepository= getRepository(User);
        //TODO: USE RETURN??
        try {
            const user = await userRepository.findOneOrFail(id);
            res.send(user);
        } catch (error) {
            res.status(404).json({message: 'User not find'});
        }
    };
    static newUser = async (req: Request, res: Response)=>{
        const {username, password, role} = req.body;
        //Created instance for user
        const user= new User();
        user.username = username;
        user.password = password;
        user.role =  role;
        //validate add 
        //TODO: trycatch???
        const errors = await validate(user, {validationError:{target: false, value:false}});
        if(errors.length > 0){
            return res.status(400).json(errors);
        }
        

        const userRepository = getRepository(User);
        try {
            user.hashPassword();
            await userRepository.save(user);
            
        } catch (error) {
            return res.status(409).json({message: 'Username already exist'});
        }
        //All ok
        res.send('User created');
    };
    static editUser = async (req: Request, res: Response)=>{
        const {id} = req.params;
        let user;
        const {username, role} = req.body;

        const userRepository = getRepository(User);
        try {
            user= await userRepository.findOneOrFail(id);
            user.username = username;
            user.role = role;
        } catch (error) {
            return res.status(404).json({message: 'User not found'});
        }
        const validationSub =  {validationError:{target: false,value:false }};
        const errors = await validate(user,validationSub);
        
        if(errors.length > 0){
            return res.status(400).json(errors);
        }
        try {
            await userRepository.save(user);
        } catch (error) {
            res.status(409).json({message: 'User already in use'});
        }
        res.status(201).json({message: 'User update'});
    };
    static deleteUser = async (req: Request, res: Response)=>{
        const { id } = req.params;
        const userRepository= getRepository(User);
        let user: User;

        try {
            user = await userRepository.findOneOrFail(id);
        } catch (error) {
            return res.status(404).json({message: 'User not found'});
        }

        userRepository.delete(id);
        res.status(201).json({message: "User deleted" });
    };
}
export default UserController;