import { FeedController } from "../../http/controllers/social-network/feed.controller";
import { Router } from "express";

const feedController = new FeedController();

export const feedRoutes = Router();

feedRoutes.post("/",feedController.create.bind(feedController))
feedRoutes.get("/",feedController.findAll.bind(feedController))