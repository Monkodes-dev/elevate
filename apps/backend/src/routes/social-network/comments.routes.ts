import { CommentController } from "../../http/controllers/social-network/comment.controller";
import { Router } from "express";

const commentController = new CommentController();

export const commentRoutes = Router();

commentRoutes.post("/",commentController.create)
commentRoutes.get("/",commentController.findAll)
commentRoutes.get("/:id",commentController.findOne)
commentRoutes.delete("/:id",commentController.delete)