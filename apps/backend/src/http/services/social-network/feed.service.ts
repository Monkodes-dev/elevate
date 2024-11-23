import { Feed } from "../../../types/social-network";
import prisma from "../../../database/prisma";

export class FeedService {
    public async createFeed(data: Feed) {
        try{
            const feed = await prisma.feed.create({
                data: {
                  posts: {
                    connect: data.posts.map((postId) => ({ id: postId })),
                  },
                },
              });
            return feed;
        }
        catch(err){
            //throw new Error("Error creating feed");
            console.log(err);
            
        }
    }

    public async findAllFeeds() {
        try{
            const feeds = await prisma.feed.findMany();
            return feeds;
        }
        catch(err){
            //throw new Error("Error finding all feeds");
            console.log(err);
            
        }
    }
}