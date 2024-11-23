import { PostController } from "../../http/controllers/social-network/post.controller";
import { Router } from "express";

const postController = new PostController();
export const postRoutes = Router();

postRoutes.post("/",postController.create)
postRoutes.get("/",postController.findAll)
postRoutes.get("/:id",postController.findOne)
postRoutes.put("/like",postController.like)
postRoutes.put("/unlike",postController.unlike)
postRoutes.delete("/:id",postController.delete)