import Controller from 'interfaces/controller.interface';
import { Request, Response, NextFunction, Router } from 'express';
import { checkPostCount } from 'middlewares/checkPostCount.middleware';
import DataService from 'modules/services/data.service';
import { apiCallLogger } from 'middlewares/apiCallsLogger.middleware';
import Joi from 'joi';

let testArr = [4, 5, 6, 3, 5, 3, 7, 5, 13, 5, 6, 4, 3, 6, 3, 6];

class PostController implements Controller {
    public path = '/api/post';
    public router = Router();
    public dataService = new DataService();

    

    constructor() {
        this.initializeRoutes();

    }

    private initializeRoutes() {
        // this.router.get(`${this.path}s`, this.getAllFake);
        // this.router.get(`${this.path}/:id`, this.getDataFake);
        // this.router.post(`${this.path}`, checkPostCount, this.addDataFake);
        // this.router.post(`${this.path}/:num`, this.getMultiDataFake);
        // this.router.delete(`${this.path}/:id`, this.removeDataFake);
        // this.router.delete(`${this.path}s`, this.removeAllFake);

        this.router.get(`${this.path}/all`, apiCallLogger, this.getAllPosts);
        this.router.get(`${this.path}/:id`, apiCallLogger, this.getElementById);
        this.router.post(`${this.path}`, apiCallLogger, this.addPost);
        this.router.delete(`${this.path}/deletion`, apiCallLogger, this.removeAllPosts);
        this.router.delete(`${this.path}/deletion/:id`, apiCallLogger, this.removePost);


    }

    private getAllFake = async (request: Request, response: Response) => {
        response.status(200).json(testArr);
    }

    private getDataFake = async (request: Request, response: Response) => {
        const id = parseInt(request.params.id);

        if (id > testArr.length) {
            response.status(404).send("Not found");
        } else {
            response.status(200).json(testArr[id]);
        }
    }

    private getMultiDataFake = async (request: Request, response: Response) => {
        const num = parseInt(request.params.num);

        const tempArr = [...testArr];
        if (num <= 0) {
            response.status(400).send("Non-positive amount forbidden");
        } else {
            response.status(200).json(tempArr.splice(0, num));
        }
    }

    private addDataFake = async (request: Request, response: Response, next: NextFunction) => {
        const { elem } = request.body;

        const parsedNum = parseInt(elem);
        testArr.push(parsedNum);

        response.status(200).send(`Added ${elem}`);
    };

    private removeDataFake = async (request: Request, response: Response) => {
        const { id } = request.body;
        testArr.splice(id, 1);
        response.status(200).send(`Removed`);
    }

    private removeAllFake = async (request: Request, response: Response) => {
        testArr.splice(0, testArr.length);
        response.status(200).json(testArr);
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

