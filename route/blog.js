import express from 'express';
import { getArticles } from '../controller/blog.js';

const router = express.Router();

router.get('/articles', getArticles);

export default router;
