import { Comment } from "../../../types/social-network";
import prisma from "../../../database/prisma";
import { ApplicationError } from './../../../errors/application.error';

export class CommentsService{
    public async createComment(data: Comment){
        try {
            const newComment = await prisma.comment.create({
                data: {
                    content: data.content,
                    authorId: data.authorId,
                    postId: data.postId,
                    parentId: data.parentId,
                    kinship: data.kinship
                }
            })

            return newComment;
        } catch (error) {
            throw new ApplicationError("Error creating comment");
        }
    }

    public async deleteComment(commentId: string){
        try {
            await prisma.comment.deleteMany({
                where: {
                    id: commentId
                }
            });

            return true;
        } catch (error) {
            throw new ApplicationError("Error deleting comment");
        }
    }

    public async findAllComments(postId: string){
        try {
            const comments = await prisma.comment.findMany({
                where: {
                    postId: postId
                }
            });

            return comments;
        } catch (error) {
            throw new ApplicationError("Error finding comments");
        }
    }

    public async findComment(commentId: string){
        try {
            const comment = await prisma.comment.findUnique({
                where: {
                    id: commentId
                }
            });

            return comment;            
        } catch (error) {
            throw new ApplicationError("Error finding comment");
        }
    }
}   