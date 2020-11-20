import "reflect-metadata";
import * as dotenv from 'dotenv';
import {createConnection} from "typeorm";
import * as express from "express";
import {Request, Response} from "express";
import * as cors from 'cors';
import * as helmet from  'helmet';
import routes from './routers';

const PORT= process.env.TYPEORM_PORT || 3000;

dotenv.config();
createConnection().then(async () => {

    // create express app
    const app = express();
    //middleware
    app.use(cors());
    app.use(helmet());
    app.use(express.json());
    //ROuter
    app.use('/', routes); 
    // start express server
    app.listen(PORT, ()=> console.log(`server running in port ${PORT}`));


})
.catch(error => console.log(error));
