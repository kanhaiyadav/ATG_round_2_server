import { Router } from "express";

const router = Router();

router.get('/create', (req, res) => {
    res.send("Post created");
});

export default router;