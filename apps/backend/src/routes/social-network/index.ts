import { Router } from "express";
import { postRoutes } from "./posts.routes";
import {commentRoutes} from "./comments.routes"

export const SocialRoutes =  Router();

SocialRoutes.use("/post", postRoutes);
SocialRoutes.use("/comment", commentRoutes);