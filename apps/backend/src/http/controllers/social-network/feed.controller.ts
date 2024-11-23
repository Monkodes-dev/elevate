import { Feed } from "../../../types/social-network";
import { Request, Response } from "express";
import { FeedService } from "../../services/social-network/feed.service";


export class FeedController extends FeedService {
    async create(req: Request, res: Response) {
        const data = req.body ;
     
        const feedCallback = await this.createFeed(data);
     
        res.status(200).json(feedCallback);
    }

    async findAll(req: Request, res: Response) {
        const allFeeds = this.findAllFeeds();
     
        res.status(200).json(allFeeds);
    }
}