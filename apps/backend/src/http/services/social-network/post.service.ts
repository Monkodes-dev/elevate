import { Like, PostRequest } from "../../../types/social-network";
import prisma from "../../../database/prisma";
import { ApplicationError } from './../../../errors/application.error';

export class PostService{
    public async createPost(data: PostRequest){
        try{

            const postData = data;

            const post = await prisma.post.create({
                data: postData
            });

            return post;

            
        }
        catch(err){
            //throw new ApplicationError("Error creating post");
            console.log(err);
            
        }
    }

    public async likePost(data:Like){
        try{

            const likeData = data;

            const post = await prisma.post.update({
                where: {
                    id: likeData.postId
                },
                data: {
                    likes: {
                        connect: {
                            id: likeData.userId
                        }
                    }
                }
            });

            return post;
        }
        catch(err){
            throw new ApplicationError("Error liking post");
        }
    }

    public async unlikePost(data:Like){
        try{

            const likeData = data;

            const post = await prisma.post.update({
                where: {
                    id: likeData.postId
                },
                data: {
                    likes: {
                        disconnect: {
                            id: likeData.userId
                        }
                    }
                }            
            });

            return post;
        }
        catch(err){
            throw new ApplicationError("Error unliking post");
        }
    }

    public async deletePost(postId: string){
        try{
            const post = await prisma.post.delete({
                where: {
                    id: postId
                }
            });

            return true;
        }
        catch(err){
            throw new ApplicationError("Error deleting post");
        }
    }

    public async findPost(postId: string){
        try{
            const post = prisma.post.findUnique({
                where: {
                    id: postId
                }
            });

            return post;
        }
        catch(err){
            throw new ApplicationError("Error finding post");
        }
    }

    public async findAllPosts(){
        try{
            const posts = prisma.post.findMany();

            return posts;
        }
        catch(err){
            throw new ApplicationError("Error finding all posts");
        }
    }
}