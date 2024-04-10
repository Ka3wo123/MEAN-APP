import express from 'express';
import { config } from './config';
import Controller from 'interfaces/controller.interface';
import bodyParser from 'body-parser';
import morgan from 'morgan';

class App {
    public app: express.Application;

    constructor(controllers: Controller[]) {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    public listen(): void {
        this.app.listen(config.port, () => {
            console.log(`Server is running on port ${config.port}`);
        });
    }

    private initializeControllers(controllers: Controller[]): void {
        controllers.forEach(c => this.app.use('/', c.router));

    }

    private initializeMiddlewares(): void {
        this.app.use(bodyParser.json());
        this.app.use(morgan('dev'));
    }
}

export default App;