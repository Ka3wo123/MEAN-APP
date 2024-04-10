import Controller from 'interfaces/controller.interface';
import {Request, Response, NextFunction, Router} from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class IndexController implements Controller {
   public path = '/*';
   public router = Router();

   constructor() {
       this.initializeRoutes();
   }

   private initializeRoutes() {
       this.router.get(this.path, this.serveIndex);
   }

   private serveIndex = async (request: Request, response: Response) => {
       response.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
   }
}

export default IndexController;