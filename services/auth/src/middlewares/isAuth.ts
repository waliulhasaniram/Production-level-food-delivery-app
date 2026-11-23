import { Request, Response, NextFunction } from "express";
import jwt, {JwtPayload} from "jsonwebtoken"
import { IUser } from "../model/User.js";

export interface AuthenticatedRequest extends Request {
    user?: IUser | null
}

export const isAuth = async(req:AuthenticatedRequest, res:Response, next:NextFunction):Promise<void> => {
    try {
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({
                message: "Please login - token missing"
            })
            return
        }

        const decodedValue = jwt.verify(
            token, 
            process.env.JWT_SECRET as string,
        ) as JwtPayload
    } catch (error) {
        
    }
}