import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config';
import { IUser } from "../modules/models/user.model";

export const auth = (request: Request, response: Response, next: NextFunction) => {
    let token = request.headers['x-auth-token']
    console.log("Request Headers:", request.headers);
    console.log("Token:", token);
    if (token && typeof token === 'string') {
        
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }
        try {
            jwt.verify(token, config.JwtSecret, (err, decoded) => {
                const user: IUser = decoded as IUser;
                next();
            });            
        } catch (ex) {
            return response.status(400).send('Invalid token.');
        }
    } else {
        return response.status(401).send('Access denied. No token provided.');
    }
};

