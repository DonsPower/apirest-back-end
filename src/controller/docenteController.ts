import {getRepository} from "typeorm";
import { Request, Response} from "express";
import {Docente} from "../entity/docente";

export class DocenteController{
    static getAll = async (req:Request, res:Response)=>{
        const userRepository = getRepository(Docente);
        let docente;
        try {
            docente= await userRepository.find();   
        } catch (error) {
            res.status(404).json({message: 'Somenthing goes wrong'})
        }
            if(docente.length > 0){
                res.send(docente);
            }else{
                res.status(404).json({message:'Not Result'})
            }    
    };
}
export default DocenteController;