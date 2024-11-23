import { User } from "@prisma/client";
import { UserService } from "../../services/users/users.service";
import { NextFunction, Request, Response } from "express"

export class UserController {
    public async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const userService = new UserService()
            const getUsers = await userService.getAll()
    
            res.status(200).json(getUsers)
        } catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    }

    public async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id

            const userService = new UserService()
            const getUsers = await userService.getById(id)
    
            res.status(200).json(getUsers)
        } catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    }

    public async create(req: Request, res: Response, next: NextFunction) {
        try {
            const data = req.body;

            const userService = new UserService()
            const createUser = await userService.create(data)
    
            res.status(201).json(createUser)
        } catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    }

    public async update(req: Request, res: Response){
        try {
            const {id} = req.params;
            const body: User = req.body;
    
            const userService = new UserService();
            const userUpdated = await userService.update(id, body);
    
            res.status(200).json(userUpdated);
        } catch (err) {
            res.status(400).json({
                status: "error",
                message: err.message
            });

        }
    }

    public async delete(req: Request, res: Response){
        try {
            const {id} = req.params;
            const userService = new UserService();
            const collaborator = await userService.delete(id);
            res.status(200).json(collaborator);
        } catch (err) {
            res.status(400).json({
                status: "error",
                message: err.message
            });
        }
    }
}