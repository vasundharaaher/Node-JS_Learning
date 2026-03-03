import {
        addBlogHandler,
        deleteBlogHandler,
        getBlogByuserHandler,
        getBlogHandler,
        updateBlogHandler,
} from '#controllers/blog.controller';

import express from 'express';

const router = express.Router();

router.post('/blog', addBlogHandler);
router.patch('/blog/:blog_id', updateBlogHandler);
router.delete('/blog/:blog_id', deleteBlogHandler);
router.get('/blog/my', getBlogByuserHandler);
router.get('/blogs', getBlogHandler);

export default router;
