import { CommentsService } from "../../services/social-network/comments.service";
import {Request, Response} from "express";

export class CommentController extends CommentsService{
    async create(req: Request, res: Response) {

        const data = req.body ;
        const commentCallback = await this.createComment(data);

        res.status(200).json(commentCallback);
    }
    async findAll(req: Request, res: Response) {
        
        const {postId} = req.body ;
        const commentCallback = await this.findAllComments(postId);

        res.status(200).json(commentCallback);
        
    }

    async findOne(req: Request, res: Response) {
        
        const { commentId} = req.body ;
        const commentCallback = await this.findComment(commentId);

        res.status(200).json(commentCallback);
        
    }

    public async delete(req: Request, res: Response) {

        const {commentId} = req.body ;
        const isDeleted = await this.deleteComment(commentId);

        res.status(200).json(isDeleted);
    }
    
}