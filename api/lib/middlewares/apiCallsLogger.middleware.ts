import { RequestHandler, Request, Response, NextFunction } from 'express';

export const apiCallLogger: RequestHandler = (request: Request, response: Response, next: NextFunction) => {
    console.log(`[${request.method} ${request.url} ${new Date().toISOString()}]`);
    next();
}
