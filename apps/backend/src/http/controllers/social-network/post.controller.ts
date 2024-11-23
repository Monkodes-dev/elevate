import { PostRequest } from "../../../types/social-network";
import { PostService } from "../../services/social-network/post.service";
import {Request, Response} from "express";

export class PostController extends PostService {
    async create(req: Request, res: Response) {
        
        const data = req.body ;

        const postCallback = await this.createPost(data);

        res.status(200).json(postCallback);

    }   
    async like(req: Request, res: Response) {
       
        const data = req.body ;

        const postCallback = await this.likePost(data);

        res.status(200).json(postCallback);

    }

    async unlike(req: Request, res: Response) {
        const data = req.body ;

        const postCallback = await this.unlikePost(data);

        res.status(200).json(postCallback);
    }

    async findOne(req: Request, res: Response) {
        const {id} = req.body ;

        const postCallback = await this.findPost(id);

        res.status(200).json(postCallback);
    }

    async findAll(req: Request, res: Response) {
        const allPosts = this.findAllPosts();

        res.status(200).json(allPosts);
    }

    async delete(req: Request, res: Response) {
        const data = req.body ;

        const isDeleted = await this.unlikePost(data);

        res.status(200).json(isDeleted);
    }
}