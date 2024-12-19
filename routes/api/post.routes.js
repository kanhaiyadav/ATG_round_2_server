import { Router } from "express";
import passport from "passport";

import { createPost, fetchPosts, createComment, createInteraction } from "../../controllers/post.controller.js";

const router = Router();

router.get('/create', (req, res) => {
    res.send("Post created");
});

router.post('/', passport.authenticate('jwt', { session: false }), createPost);
router.get('/', passport.authenticate('jwt', { session: false }), fetchPosts);
router.post('/comment/:postId', passport.authenticate('jwt', { session: false }), createComment);
router.post('/interaction/:postId', passport.authenticate('jwt', { session: false }), createInteraction);

export default router;