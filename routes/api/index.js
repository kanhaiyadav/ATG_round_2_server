import { Router } from "express";
import postRouter from "./post.routes.js";

const router = Router();

router.use("/post", postRouter);


export default router;
