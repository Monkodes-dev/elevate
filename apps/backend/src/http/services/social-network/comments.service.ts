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
            //throw new ApplicationError("Error creating comment");
            return error;
            
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
            return error;
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
            return error;
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
            return error;
        }
    }
}   