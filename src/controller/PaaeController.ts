import {getRepository} from "typeorm";
import { Request, Response} from "express";
import {Paae} from "../entity/Paae";

export class PaaeController{
    static getAll = async (req:Request, res:Response)=>{
        const userRepository = getRepository(Paae);
        let paae;
        try {
            paae= await userRepository.find();   
        } catch (error) {
            res.status(404).json({message: 'Somenthing goes wrong'})
        }
            if(paae.length > 0){
                res.send(paae);
            }else{
                res.status(404).json({message:'Not Result'})
            }    
    };
}
export default PaaeController;