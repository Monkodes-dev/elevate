import { CommentsService } from "../../services/social-network/comments.service";

export class CommentController extends CommentsService{
    async create(req: Request, res: Response) {
        throw new Error('Method not implemented.');
    }
    async findAll(req: Request, res: Response) {
        throw new Error('Method not implemented.');
    }
    
}