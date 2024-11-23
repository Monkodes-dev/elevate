import { CommentController } from "../../http/controllers/social-network/comment.controller";
import { Router } from "express";

const commentController = new CommentController();

export const commentRoutes = Router();

commentRoutes.post("/",commentController.create.bind(commentController))
commentRoutes.get("/",commentController.findAll.bind(commentController))
commentRoutes.get("/:id",commentController.findOne.bind(commentController))
commentRoutes.delete("/:id",commentController.delete.bind(commentController))