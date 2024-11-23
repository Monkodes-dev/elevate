import { PostRequest } from "../../../types/social-network";
import { PostService } from "../../services/social-network/post.service";
import {Request} from "express";

export class PostController extends PostService {
    async create(req: Request, res: {status: Function, json: Function}) {
        
        const data = req.body ;

        const postCallback = await this.createPost(data);

        return postCallback

    }
    async like(req: Request, res: Response) {
       
        const data = req.body ;

        const postCallback = await this.likePost(data);

        return postCallback

    }

    async unlike(req: Request, res: Response) {
        const data = req.body ;

        const postCallback = await this.unlikePost(data);

        return postCallback
    }

    async findOne(req: Request, res: Response) {
        const {id} = req.body ;

        const postCallback = await this.findPost(id);

        return postCallback
    }

    async findAll(req: Request, res: Response) {
        const allPosts = this.findAllPosts();

        return allPosts
    }

    async delete(req: Request, res: Response) {
        const data = req.body ;

        const isDeleted = await this.unlikePost(data);

        return isDeleted
    }
}