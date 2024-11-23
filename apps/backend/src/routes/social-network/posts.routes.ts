import { PostController } from "../../http/controllers/social-network/post.controller";
import { Router } from "express";

const postController = new PostController();
export const postRoutes = Router();

postRoutes.post("/",postController.create.bind(postController))
postRoutes.get("/",postController.findAll.bind(postController))
postRoutes.get("/:id",postController.findOne.bind(postController))
postRoutes.put("/like",postController.like.bind(postController))
postRoutes.put("/unlike",postController.unlike.bind(postController))
postRoutes.delete("/:id",postController.delete.bind(postController))