import Controller from 'interfaces/controller.interface';
import { Request, Response, NextFunction, Router } from 'express';

let testArr = [4, 5, 6, 3, 5, 3, 7, 5, 13, 5, 6, 4, 3, 6, 3, 6];

class PostController implements Controller {
    public path = '/api/post';
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}s`, this.getAll);
        this.router.get(`${this.path}/:id`, this.getData);


        this.router.post(`${this.path}`, this.addData);
        this.router.post(`${this.path}/:num`, this.getMultiData);

        this.router.delete(`${this.path}/:id`, this.removeData);
        this.router.delete(`${this.path}s`, this.removeAll);
    }

    private getAll = async (request: Request, response: Response) => {
        response.status(200).json(testArr);

    }



    private getData = async (request: Request, response: Response) => {
        const id = parseInt(request.params.id);


        if (id > testArr.length) {
            response.status(404).send("Not found");
        } else {
            response.status(200).json(testArr[id]);
        }
    }

    private getMultiData = async (request: Request, response: Response) => {
        const num = parseInt(request.params.num);

        if (num <= 0) {
            response.status(400).send("Non-positive amount forbidden");
        } else {
            response.status(200).json(testArr.splice(0, num));
        }

    }

    private addData = async (request: Request, response: Response, next: NextFunction) => {
        const { elem } = request.body;

        testArr.push(elem);

        response.status(200).send(`Added ${elem}`);
    };

    private removeData = async (request: Request, response: Response) => {
        const { id } = request.body;
        testArr.splice(id, 1);
        response.status(200).send(`Removed`);
    }

    private removeAll = async (request: Request, response: Response) => {
        testArr.splice(0, testArr.length);
        response.status(200).json(testArr);
    }
}

export default PostController;

