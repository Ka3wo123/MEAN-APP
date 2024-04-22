import { RequestHandler, Request, Response, NextFunction } from 'express';
import { config } from "../config";

export const checkPostCount: RequestHandler = (request: Request, response: Response, next: NextFunction) => {
    const { elem } = request.body;
    const parsedValue = parseInt(elem, 10);
    if (isNaN(parsedValue) || parsedValue >= config.supportedPostCount) {
        return response.status(400).send('Brak lub niepoprawna wartość!');
    }
    next();
};