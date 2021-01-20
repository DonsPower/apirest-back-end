import {getRepository} from "typeorm";
import { Request, Response} from "express";
import {Alumnos} from "../entity/Alumnos";
import {validate} from 'class-validator';

export class AlumnosController{
    static getAll = async (req:Request, res:Response)=>{
        const userRepository = getRepository(Alumnos);
        let alumnos;
        try {
            alumnos= await userRepository.find();   
        } catch (error) {
            res.status(404).json({message: 'Somenthing goes wrong'})
        }
            if(alumnos.length > 0){
                res.send(alumnos);
            }else{
                res.status(404).json({message:'Not Result'})
            }    
    };
    static getById = async (req: Request, res: Response)=>{
        const {id} =  req.params;
        const userRepository= getRepository(Alumnos);
        try {
            const alum = await userRepository.findOneOrFail(id);
            res.send(alum);
        } catch (error) {
            res.status(404).json({message: 'User not find'});
        }
    };
    static newUser = async (req: Request, res                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        : Response)=>{
        const {nombre, apellidop, apellidom, progacademico, boleta, telefonofijo, telefonomovil, telefonopersonal, correo, huella, nss} = req.body;
        //Created instance for user
        const alum= new Alumnos();
        alum.nombreAlumno = nombre;
        alum.apellidoPatAlumno = apellidop;
        alum.apellidoMatAlumno =  apellidom;
        alum.carrera = progacademico;
        alum.boleta =  boleta;
        alum.telefonoMovil =  telefonomovil;
        alum.telefonoFijo =  telefonofijo;
        alum.telefonoPersonal =  telefonopersonal;
        alum.emailAlumno =  correo;
        alum.NSS =  nss;

        const errors = await validate(alum, {validationError:{target: false, value:false}});
        if(errors.length > 0){
            return res.status(400).json(errors);
        }
        const userRepository = getRepository(Alumnos);
        try {
            await userRepository.save(alum);
            
        } catch (error) {
            return res.status(409).json({message: 'Username already exist'});
        }    
        //All ok
        res.send('User created');
    };
    static editUser = async (req: Request, res: Response)=>{
        const {id} = req.params;
        let alum;
        const {nombre, apellidop, apellidom, progacademico, boleta, telefonofijo, telefonomovil, telefonopersonal, correo, nss} = req.body;

        const userRepository = getRepository(Alumnos);
        try {
            alum= await userRepository.findOneOrFail(id);
            alum.nombreAlumno = nombre;
            alum.apellidoPatAlumno = apellidop;
            alum.apellidoMatAlumno =  apellidom;
            alum.carrera = progacademico;
            alum.boleta =  boleta;
            alum.telefonoMovil =  telefonomovil;
            alum.telefonoFijo =  telefonofijo;
            alum.telefonoPersonal =  telefonopersonal;
            alum.emailAlumno =  correo;
            alum.NSS =  nss;
            
            
        } catch (error) {
            return res.status(404).json({message: 'User not found'});
        }
        const validationSub =  {validationError:{target: false,value:false }};
        const errors = await validate(alum,validationSub);
        
        if(errors.length > 0){
            return res.status(400).json(errors);
        }
        try {
            await userRepository.save(alum);
        } catch (error) {
            res.status(409).json({message: 'User already in use'});
        }
        res.status(201).json({message: 'User update'});
    };
    static deleteUser = async (req: Request, res: Response)=>{
        const { id } = req.params;
        const userRepository= getRepository(Alumnos);
        let alum: Alumnos;

        try {
            alum = await userRepository.findOneOrFail(id);
        } catch (error) {
            return res.status(404).json({message: 'User not found'});
        }

        userRepository.delete(id);
        res.status(201).json({message: "User deleted" });
    };
}
export default AlumnosController;