import Controller from 'interfaces/controller.interface';
import { Request, Response, NextFunction, Router } from 'express';
import DataService from 'modules/services/data.service';
import { apiCallLogger } from 'middlewares/apiCallsLogger.middleware';
import Joi from 'joi';

class PostController implements Controller {
    public path = '/api/post';
    public router = Router();
    public dataService = new DataService();

    

    constructor() {
        this.initializeRoutes();

    }

    private initializeRoutes() {

        this.router.get(`${this.path}/all`, apiCallLogger, this.getAllPosts);
        this.router.get(`${this.path}/:id`, apiCallLogger, this.getElementById);
        this.router.post(`${this.path}`, apiCallLogger, this.addPost);
        this.router.delete(`${this.path}/deletion`, apiCallLogger, this.removeAllPosts);
        this.router.delete(`${this.path}/deletion/:id`, apiCallLogger, this.removePost);


    }

    private addPost = async (request: Request, response: Response, next: NextFunction) => {
        const schema = Joi.object({
            title: Joi.string().required(),
            text: Joi.string().required(),
            image: Joi.string().uri().required()
         });

        const { title, text, image } = request.body;

        try {
            const validatedData = await schema.validateAsync({title, text, image});
            await this.dataService.createPost(validatedData);
            response.status(200).json(validatedData);
        } catch (error: any) {
            console.error(`Validation Error: ${error.message}`);
            response.status(400).json({ error: 'Invalid input data.' });
        }

    }

    private getAllPosts = async (request: Request, response: Response, next: NextFunction) => {
        const allPosts = await this.dataService.getAllPosts();
        response.status(200).json(allPosts);
    }

    private getElementById = async (request: Request, response: Response, next: NextFunction) => {
        const { id } = request.params;
        const allData = await this.dataService.query({ _id: id });
        if(allData.length === 0) {
            response.status(404).json("No post found");
        } else {
            console.log(allData)
            response.status(200).json(allData);
        }
    }

    private removePost = async (request: Request, response: Response, next: NextFunction) => {
        const { id } = request.params;
        await this.dataService.deleteData({ _id: id });
        response.sendStatus(200);
    };

    private removeAllPosts = async (request: Request, response: Response, next: NextFunction) => {        
        await this.dataService.deleteAllData();
        response.sendStatus(200);
    };

    
}

export default PostController;

